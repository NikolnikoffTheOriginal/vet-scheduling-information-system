import { Appointment } from "./Appointment";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { Loader } from "../additionalComponents/Loader";
import { getDatabase, onValue, ref, remove, set } from "firebase/database";
import { IDatabase } from "../../constants";

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const db = getDatabase();
  const [appointments, setAppointments] = useState<Array<IDatabase>>([]);
  const [loading, setLoading] = useState(true);

  const getAppointments = useCallback(() => {
    const appointmentsRef = ref(db, 'appointments');
    const unsubscribe = onValue(appointmentsRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        const appointments = Object.entries(data).map(([uuid, appointmentData]) => ({
          ...appointmentData as IDatabase,
          uuid,
        }));
        setAppointments(appointments);
      }
    });

    return () => unsubscribe();
  }, [db]);

  useEffect(() => {
    getAppointments();
    setLoading(false);
  }, [getAppointments]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setLoading(false);
      if (!user) {
        navigate("/login");
      }
    });

    return unsubscribe;
  }, [navigate]);

  const signOut = async () => {
    await auth.signOut();
    navigate("/login");
  };

  const deleteFromDataBase = (uuid: string) => {
    remove(ref(db, 'appointments/' + uuid))
      .then(() => getAppointments())
  }

  const updateDataBase = (uuid: string, data: IDatabase) => {
    set(ref(db, 'appointments/' + uuid), { ...data, approved: true });
  }

  return (
    <div className="flex justify-center items-center h-[100vh]">
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center gap-3">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          {appointments.filter(appointment => !appointment.approved).length === 0 ? (
            <div className="text-2xl">There are no appointments yet.</div>
          ) : (
            appointments.filter(appointment => !appointment.approved)
              .map(appointment => (
                <Appointment
                  key={appointment.uuid}
                  clientInfo={appointment.clientInfo}
                  clinician={appointment.clinician}
                  date={appointment.date}
                  petInfo={appointment.petInfo}
                  time={appointment.time}
                  deleteFromDataBase={() => deleteFromDataBase(appointment.uuid)}
                  updateDataBase={() => updateDataBase(appointment.uuid, appointment)}
                />
              ))
          )}
          <button
            className="btn btn-primary w-full"
            onClick={signOut}
          >Log out</button>
        </div >
      )}
    </div >
  );
};