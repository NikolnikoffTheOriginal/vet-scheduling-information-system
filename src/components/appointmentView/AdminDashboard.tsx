import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { getDatabase, onValue, ref, remove, set } from "firebase/database";
import { IDatabase } from "../../constants";
import { useOnUserStateChange } from "../../hooks/useOnUserStateChange";
import { getFilteredAppointmentsOnChange } from "../../utils/getFilteredAppointmentsOnChange";
import { getValidAppointments } from "../../utils/getValidAppointments";
import { Filter } from "../additionalComponents/Filter";
import Calendar from "react-calendar";
import { AdminAppointmentView } from "./AdminAppointmentView";
import { filterByDate } from "../../utils/filterByDate";
import { useReactToPrint } from "react-to-print";


export const AdminDashboard = () => {
  const navigate = useNavigate();
  const db = getDatabase();
  const [appointments, setAppointments] = useState<Array<IDatabase>>([]);
  const [filteringOption, setFilteringOption] = useState('none');
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState<Date | null>(null);

  const originalAppointments = [...appointments];
  const validAppointments = getValidAppointments(getFilteredAppointmentsOnChange(filteringOption, originalAppointments));

  const filterByDateAppointments = validAppointments.filter(appointment => filterByDate(appointment, date));

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
  }, [getAppointments]);

  useOnUserStateChange();

  const signOut = async () => {
    await auth.signOut();
    navigate("/login");
  };

  const deleteFromDataBase = (uuid: string) => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appointment) => appointment.uuid !== uuid)
    );

    remove(ref(db, 'appointments/' + uuid))
      .then(() => {
        getAppointments();
      })
  };

  const updateAppoinemnt = (uuid: string, data: Partial<IDatabase>) => {
    set(ref(db, 'appointments/' + uuid), data);
  }

  const handleDateChange = (value: Date | null) => {
    setDate(value);
    setShowCalendar(false);
  }

  const tableRef = useRef<HTMLTableElement>(null);
  const print = useReactToPrint({ contentRef: tableRef });

  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      <div className="p-2 flex-1">
        <div className="bg-blue-500 text-gray-100 text-center py-3">
          <h1 className="text-2xl font-bold">Patient Scheduling Information System</h1>
        </div>
        <div className="navbar bg-base-300 flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-xl font-bold">Admin Dashboard</p>
            <button className="btn btn-primary text-lg ml-2" onClick={signOut}>Log out</button>
            <button className="btn btn-secondary text-lg ml-2" onClick={() => print()}>Print</button>
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
          <div className="overflow-x-auto">
            <table className="table border border-gray-300 overflow-hidden rounded-lg shadow-lg table-auto w-full text-left" ref={tableRef}>
              <thead>
                <tr className="bg-purple-200 text-black text-center">
                  <th></th>
                  <th>Client Name</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Pet Name</th>
                  <th>Species</th>
                  <th>Clinician</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th></th>
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
          </div>
        )}
      </div>
      <footer>&copy; Mikael Nikolnikov, ISCS, Diploma Work, 2024</footer>
    </div>
  );
};