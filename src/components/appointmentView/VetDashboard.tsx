import { useEffect, useState } from "react";
import { Loader } from "../additionalComponents/Loader";
import { Appointment } from "./Appointment";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { IDatabase } from "../../constants";
import { ref, onValue, getDatabase } from "firebase/database";
import { useOnUserStateChange } from "../../hooks/useOnUserStateChange";
import { getFilteredAppointmentsOnChange } from "../../utils/getFilteredAppointmentsOnChange";
import { getValidAppointments } from "../../utils/getValidAppointments";
import { Filter } from "../additionalComponents/Filter";

export const VetDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<Array<IDatabase>>([]);
  const navigate = useNavigate();
  const db = getDatabase();
  const [filteringOption, setFilteringOption] = useState('none');
  const originalAppointments = [...appointments];
  const filteredAppointments = getFilteredAppointmentsOnChange(filteringOption, originalAppointments);
  const validAppointments = getValidAppointments(filteredAppointments);

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
        })).sort((a, b) => {
          const dateA = new Date(`${a.date} ${a.time}`);
          const dateB = new Date(`${b.date} ${b.time}`);
          return dateA.getTime() - dateB.getTime();
        }).filter(appointment => appointment.approved);

        setAppointments(appointments);
      }
    });
    setLoading(false);
  }, [db]);

  const signOut = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center gap-3 overflow-y-auto overflow-x-hidden max-h-[90vh] min-w-[500px]">
          <div className='flex justify-between items-center w-full'>
            <h1 className="text-2xl font-bold">Vet Dashboard</h1>
            <div className="gap-3">
              <Filter setFilteringOption={setFilteringOption} isNotApproveNeeded={false}/>
            </div>
          </div>
          {validAppointments.length === 0 ?
            <div className="text-2xl">There are no appointments yet.</div>
            : (
              validAppointments.map(appointment => (
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
      <footer>&copy; Mikael Nikolnikov Diploma Work 2024</footer>
    </div>
  );
}