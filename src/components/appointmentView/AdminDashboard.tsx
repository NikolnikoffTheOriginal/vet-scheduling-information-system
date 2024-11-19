import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { Loader } from "../additionalComponents/Loader";
import { getDatabase, onValue, ref, remove, set } from "firebase/database";
import { IDatabase } from "../../constants";
import { useOnUserStateChange } from "../../hooks/useOnUserStateChange";
import { getFilteredAppointmentsOnChange } from "../../utils/getFilteredAppointmentsOnChange";
import { getValidAppointments } from "../../utils/getValidAppointments";
import { Filter } from "../additionalComponents/Filter";
import Calendar from "react-calendar";
import { format } from "date-fns";
import { AdminAppointmentView } from "./AdminAppointmentView";


export const AdminDashboard = () => {
  const navigate = useNavigate();
  const db = getDatabase();
  const [appointments, setAppointments] = useState<Array<IDatabase>>([]);
  const [loading, setLoading] = useState(true);
  const [filteringOption, setFilteringOption] = useState('none');
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState<Date | null>(null);

  const originalAppointments = [...appointments];
  const validAppointments = getValidAppointments(getFilteredAppointmentsOnChange(filteringOption, originalAppointments));

  const filterByDate = (appointment: IDatabase) => {
    if (!date || !appointment) {
      return;
    }

    const appointmentDate = new Date(`${appointment.date} ${appointment.time}`);
    return format(appointmentDate, 'MMMM dd') === format(date, 'MMMM dd');
  }

  const filterByDateAppointments = validAppointments.filter(appointment => filterByDate(appointment));

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

  const handleDateChange = (value: Date | null) => {
    setDate(value);
    setShowCalendar(false);
  }

  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      {loading ? (
        <Loader />
      ) : (
        <div className="p-2 flex-1">
          <div className="navbar bg-base-300 flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-xl font-bold">Admin Dashboard</p>
              <button
                className="btn btn-primary text-lg ml-2"
                onClick={signOut}
              >Log out</button>
            </div>
            <div className="relative gap-3 flex items-center">
              <p className="font-bold">Choose date to filter:</p>
              <input
                type="text"
                value={date ? date.toLocaleDateString() : ''}
                onClick={() => setShowCalendar(!showCalendar)}
                readOnly
                className="border p-2 rounded"
                placeholder="Select a date"
              />

              <button className="btn btn-primary" onClick={() => handleDateChange(null)}>Clear</button>

              {showCalendar && (
                <div className="absolute z-10 top-12">
                  <Calendar
                    locale="en"
                    className="p-2"
                    minDate={new Date()}
                    onChange={(e) => handleDateChange(e as Date)}
                    value={date}
                  />
                </div>
              )}
            </div>
            <div className="gap-2">
              <Filter setFilteringOption={setFilteringOption} isNotApproveNeeded={true} />
            </div>
          </div>
          {validAppointments.length === 0 && !date ? (
            <p className="text-2xl flex justify-center items-center h-[90vh]">There are no appointments yet.</p>
          ) : date && filterByDateAppointments.length === 0 ? (
            <p className="text-2xl flex justify-center items-center h-[90vh]">There are no appointments for this date.</p>
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {date ? filterByDateAppointments.map((appointment, index) => (
                  <AdminAppointmentView key={appointment.uuid} appointment={appointment} deleteFromDataBase={deleteFromDataBase} updateAppoinemnt={updateAppoinemnt} index={index} />
                )) : validAppointments.map((appointment, index) => (
                  <AdminAppointmentView key={appointment.uuid} appointment={appointment} deleteFromDataBase={deleteFromDataBase} updateAppoinemnt={updateAppoinemnt} index={index} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      <footer>&copy; Mikael Nikolnikov Diploma Work 2024</footer>
    </div >
  );
};