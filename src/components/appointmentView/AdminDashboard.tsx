import { Appointment } from "./Appointment";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { Loader } from "../additionalComponents/Loader";
import { getDatabase, onValue, ref, remove, set } from "firebase/database";
import { IDatabase } from "../../constants";
import { useOnUserStateChange } from "../../hooks/useOnUserStateChange";
import { getFilteredAppointmentsOnChange } from "../../utils/getFilteredAppointmentsOnChange";


export const AdminDashboard = () => {
  const navigate = useNavigate();
  const db = getDatabase();
  const [appointments, setAppointments] = useState<Array<IDatabase>>([]);
  const [loading, setLoading] = useState(true);
  const [filteringOption, setFilteringOption] = useState('none');

  const originalAppointments = [...appointments];
  const filteredAppointments = getFilteredAppointmentsOnChange(filteringOption, originalAppointments);

  const getAppointments = useCallback(() => {
    const appointmentsRef = ref(db, 'appointments');
    onValue(appointmentsRef, snapshot => {
      const data = snapshot.val();

      if (data) {
        const appointments = Object.entries(data).map(([uuid, appointmentData]) => ({
          ...appointmentData as IDatabase,
          uuid,
        })).sort((a, b) => {
          const dateA = new Date(`${a.date} ${a.time}`);
          const dateB = new Date(`${b.date} ${b.time}`);

          return dateA.getTime() - dateB.getTime();
        }).filter(appointment => !appointment.approved);

        setAppointments(appointments);
      }
    });
  }, [db]);

  useEffect(() => {
    getAppointments();
    setLoading(false);
  }, [getAppointments]);

  useOnUserStateChange();

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
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center gap-3 overflow-y-auto overflow-x-hidden max-h-[90vh]">
          <div className={`flex justify-between items-center ${appointments.length !== 0 ? 'w-full' : ''}`}>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            {appointments.length !== 0 && (
              <div className="flex items-center justify-around">
                <p className="font-bold">Filter by: </p>
                <select
                  className="bg-transparent"
                  defaultValue={"none"}
                  onChange={(e) => {
                    setFilteringOption(e.target.value);
                  }}>
                  <option>none</option>
                  <option>current date</option>
                  <option>clinician (John Doe)</option>
                  <option>clinician (Alice Smith)</option>
                  <option>dog</option>
                  <option>cat</option>
                </select>
              </div>
            )}
          </div>

          {appointments.length === 0 ? (
            <div className="text-2xl">There are no appointments yet.</div>
          ) : (
            filteredAppointments
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
                  user="admin"
                />
              )))}
          <button
            className="btn btn-primary w-full"
            onClick={signOut}
          >Log out</button>
        </div >
      )}
    </div >
  );
};