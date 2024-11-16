import { useEffect, useState } from "react";
import { Loader } from "../additionalComponents/Loader";
import { Appointment } from "./Appointment";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { IDatabase } from "../../constants";
import { ref, onValue, getDatabase, remove } from "firebase/database";
import { useOnUserStateChange } from "../../hooks/useOnUserStateChange";

export const VetDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<Array<IDatabase>>([]);
  const navigate = useNavigate();
  const db = getDatabase();

  useOnUserStateChange();

  useEffect(() => {
    const appointmentsRef = ref(db, 'appointments');
    onValue(appointmentsRef, snapshot => {
      setAppointments([]);
      const data = snapshot.val();

      if (data) {
        const appointments = Object.entries(data).map(([uuid, appointmentData]) => ({
          ...appointmentData as IDatabase,
          uuid,
        }));
        setAppointments(appointments);
      }
    });
    setLoading(false);
  }, [db]);

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  
    if (appointments.length > 0) {
      appointments.forEach(appointment => {
        const appointmentDate = new Date(currentYear + appointment.date + " " + appointment.time);

        if (appointmentDate < currentDate) {
          remove(ref(db, "appointments/" + appointment.uuid));
        }
      });
    }
  }, [appointments, db]);

  const signOut = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      {loading ? (
        <Loader />
      ) : (

        <div className="bg-white p-8 rounded-lg shadow-md flex items-center flex-col gap-2">
          <h1 className="text-2xl font-bold">Your upcoming appointments:</h1>
          {appointments.filter(appointment => !!appointment.approved).length === 0 ? (
            <div className="text-2xl">There are no appointments yet.</div>
          ) : (
            appointments.filter(appointment => !!appointment.approved)
              .map(appointment => (
                <Appointment
                  key={appointment.uuid}
                  clientInfo={appointment.clientInfo}
                  clinician={appointment.clinician}
                  date={appointment.date}
                  petInfo={appointment.petInfo}
                  time={appointment.time}
                  user="vet"
                />
              ))
          )}
          <button
            className="btn btn-primary w-full"
            onClick={signOut}
          >Log out</button>
        </div>
      )}
    </div>
  );
}