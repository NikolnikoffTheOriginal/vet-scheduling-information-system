import { useEffect, useRef, useState } from "react";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { IDatabase } from "../../constants";
import { ref, onValue, getDatabase, set } from "firebase/database";
import { useOnUserStateChange } from "../../hooks/useOnUserStateChange";
import { getFilteredAppointmentsOnChange } from "../../utils/getFilteredAppointmentsOnChange";
import { getValidAppointments } from "../../utils/getValidAppointments";
import { Filter } from "../additionalComponents/Filter";
import Calendar from "react-calendar";
import { filterByDate } from "../../utils/filterByDate";
import { VetAppointmentView } from "./VetAppointmentView";
import { useReactToPrint } from "react-to-print";

export const VetDashboard = () => {
  const [appointments, setAppointments] = useState<Array<IDatabase>>([]);
  const navigate = useNavigate();
  const db = getDatabase();
  const [filteringOption, setFilteringOption] = useState('none');
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState<Date | null>(null);

  const originalAppointments = [...appointments];
  const filteredAppointments = getFilteredAppointmentsOnChange(filteringOption, originalAppointments);
  const validAppointments = getValidAppointments(filteredAppointments);
  const filterByDateAppointments = validAppointments.filter(appointment => filterByDate(appointment, date));

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
  }, [db]);

  const signOut = async () => {
    await auth.signOut();
    navigate("/login");
  };

  const handleDateChange = (value: Date | null) => {
    setDate(value);
    setShowCalendar(false);
  };

  const updateAppointment = (uuid: string, data: Partial<IDatabase>) => {
    set(ref(db, 'appointments/' + uuid), data);
  };

  const tableRef = useRef<HTMLTableElement>(null);
  const print = useReactToPrint({ contentRef: tableRef });

  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-2 flex-1">
      <div className="bg-blue-500 text-gray-100 py-3 flex justify-between items-center pr-3 pl-3">
          <h1 className="text-2xl font-bold">Patient Scheduling Information System</h1>
          <div className="flex gap-2 items-center">
            <p className="text-xl font-bold">Vet Dashboard</p>
            <button className="btn btn-primary text-lg ml-2" onClick={signOut}>Log out</button>
          </div>
        </div>
        <div className="navbar bg-base-300 flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="btn btn-secondary text-lg ml-2"
              onClick={() => print()}
            >Print</button>
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
            <Filter setFilteringOption={setFilteringOption} isNotApproveNeeded={false} />
          </div>
        </div>
        {validAppointments.length === 0 && !date ? (
          <p className="text-2xl flex justify-center items-center h-[90vh]">There are no appointments yet.</p>
        ) : date && filterByDateAppointments.length === 0 ? (
          <p className="text-2xl flex justify-center items-center h-[90vh]">There are no appointments for this date.</p>
        ) : (
          <table className="table overflow-hidden border border-gray-300 rounded-lg shadow-lg table-auto w-full text-left" ref={tableRef}>
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
                <th>Doctor Note</th>
              </tr>
            </thead>
            <tbody>
              {date ? filterByDateAppointments.map((appointment, index) => (
                <VetAppointmentView key={appointment.uuid} appointment={appointment} index={index} updateAppointment={updateAppointment}/>
              )) : validAppointments.map((appointment, index) => (
                <VetAppointmentView key={appointment.uuid} appointment={appointment} index={index} updateAppointment={updateAppointment}/>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <footer>&copy; Mikael Nikolnikov, ISCS, Diploma Work, 2024</footer>
    </div>
  );
}