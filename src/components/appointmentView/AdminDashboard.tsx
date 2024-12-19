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
import { format, parse } from "date-fns";


export const AdminDashboard = () => {
  const navigate = useNavigate();
  const db = getDatabase();
  const [appointments, setAppointments] = useState<Array<IDatabase>>([]);
  const [filteringOption, setFilteringOption] = useState('none');
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [showStatistics, setShowStatistics] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const originalAppointments = [...appointments];
  const validAppointments = getValidAppointments(getFilteredAppointmentsOnChange(filteringOption, originalAppointments));
  const filterByDateAppointments = validAppointments.filter(appointment => filterByDate(appointment, date));

  const getAppointments = useCallback(() => {
    const appointmentsRef = ref(db, 'appointments');
    onValue(appointmentsRef, snapshot => {
      const data = snapshot.val();
      
      if (data) {
        try {
          const appointments = Object.entries(data).map(([uuid, appointmentData]) => ({
            ...appointmentData as IDatabase,
            uuid,
          })).sort((a, b) => {
            const dateA = new Date(`${format(parse(a.date, 'dd/MM/yyyy', new Date()), 'yyyy-MM-dd')} ${a.time}`);
            const dateB = new Date(`${format(parse(b.date, 'dd/MM/yyyy', new Date()), 'yyyy-MM-dd')} ${b.time}`);
            
            if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
              throw new Error('Invalid date format');
            }
  
            return dateA.getTime() - dateB.getTime();
          });
  
          setAppointments(appointments);
        } catch (error) {
          console.error('Error processing appointments:', error);
        }
      } else {
        console.warn('No data found');
      }
    }, (error) => {
      console.error('Error fetching appointments:', error);
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

  // Calculate statistics
  const totalAppointments = appointments.length;
  const approvedAppointments = appointments.filter(appointment => appointment.approved).length;
  const pendingAppointments = totalAppointments - approvedAppointments;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowStatistics(false);
      }
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, calendarRef]);

  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      <div className="p-2 flex-1">
        <div className="bg-blue-500 text-gray-100 py-3 flex justify-between items-center pr-3 pl-3">
          <h1 className="text-2xl font-bold">Patient Scheduling Information System</h1>
          <div className="flex gap-2 items-center">
            <p className="text-xl font-bold">Admin Dashboard</p>
            <button className="btn btn-primary text-lg ml-2" onClick={signOut}>Log out</button>
          </div>
        </div>
        <div className="navbar bg-base-300 flex items-center justify-between">
          <div className="flex items-center">
            <button className="btn btn-secondary text-lg ml-2" onClick={() => print()}>Print</button>
            <div className="relative" ref={dropdownRef}>
              <button className="btn btn-info text-lg ml-2" onClick={() => setShowStatistics(!showStatistics)}>{`${showStatistics ? 'Hide' : 'Show'} Statistics`}</button>
              {showStatistics && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50">
                  <h2 className="text-xl font-bold mb-2">Statistics</h2>
                  <p>Total Appointments: {totalAppointments}</p>
                  <p>Approved Appointments: {approvedAppointments}</p>
                  <p>Pending Appointments: {pendingAppointments}</p>
                </div>
              )}
            </div>
          </div>
          <div className="relative gap-3 flex items-center" ref={calendarRef}>
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