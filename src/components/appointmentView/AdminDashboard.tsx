import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { Loader } from "../additionalComponents/Loader";
import { getDatabase, onValue, ref, remove, set } from "firebase/database";
import { IDatabase } from "../../constants";
import { useOnUserStateChange } from "../../hooks/useOnUserStateChange";
import { getFilteredAppointmentsOnChange } from "../../utils/getFilteredAppointmentsOnChange";
import { getValidAppointments } from "../../utils/getValidAppointments";


export const AdminDashboard = () => {
  const navigate = useNavigate();
  const db = getDatabase();
  const [appointments, setAppointments] = useState<Array<IDatabase>>([]);
  const [loading, setLoading] = useState(true);
  const [filteringOption, setFilteringOption] = useState('none');

  const originalAppointments = [...appointments];
  const filteredAppointments = getFilteredAppointmentsOnChange(filteringOption, originalAppointments);
  const validAppointments = getValidAppointments(filteredAppointments);

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
        });

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

  const updateAppoinemnt = (uuid: string, data: Partial<IDatabase>) => {
    set(ref(db, 'appointments/' + uuid), data);
  }

  return (
    <div className="h-[100vH] bg-base-200">
      {loading ? (
        <Loader />
      ) : (
        <div className="p-2">
          <div className="navbar bg-base-300">
            <div className="flex-1">
              <p className="text-xl font-bold">Admin Dashboard</p>
              <button
                className="btn btn-primary text-lg ml-2"
                onClick={signOut}
              >Log out</button>
            </div>
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
          {validAppointments.length === 0 ? (
            <p className="text-2xl flex justify-center items-center h-[90vh]">There are no appointments yet.</p>
          ) : (
            <table className="table">
              <thead>
                <tr className="text-center">
                  <th></th>
                  <th>Client Name</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>Date and Time</th>
                  <th>Pet Name</th>
                  <th>Species</th>
                  <th>Clinician</th>
                  <th>Message</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {validAppointments.map((appointment, index) => (
                  <tr key={appointment.uuid} className="hover text-center">
                    <th>{index + 1}</th>
                    <td>{appointment.clientInfo.name}</td>
                    <td>{appointment.clientInfo.email}</td>
                    <td>{appointment.clientInfo.phone}</td>
                    <td>{appointment.date} {appointment.time}</td>
                    <td>{appointment.petInfo.name}</td>
                    <td>{appointment.petInfo.species}</td>
                    <td>{appointment.clinician}</td>
                    <td>{appointment.clientInfo.message}</td>
                    <td>
                      <select
                        name="Status"
                        defaultValue={appointment.approved ? 'Approved' : 'Pending'}
                        className="bg-inherit"
                        onChange={(e) => {
                          if (e.target.value === 'Approved') {
                            updateAppoinemnt(appointment.uuid, { approved: true });
                          } else if (e.target.value === 'Declined') {
                            deleteFromDataBase(appointment.uuid);
                          } else if (e.target.value === 'Pending') {
                            updateAppoinemnt(appointment.uuid, { approved: false });
                          }
                        }}
                      >
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Declined</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div >
  );
};