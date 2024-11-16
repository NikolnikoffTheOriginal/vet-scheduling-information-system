import { add, format } from "date-fns";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { STARTING_WORKING_HOUR, CLOSING_WORKING_HOUR, APPOINTMENT_DURATION, IDateTime, IDatabase } from "../../constants";
import { Loader } from "../additionalComponents/Loader";
import { ref, onValue, getDatabase } from "firebase/database";


interface ICalendarDate {
  dateTime: IDateTime;
  onNextClick: () => void;
  onBackClick: () => void;
  setDateTime: (date: IDateTime | ((prev: IDateTime) => IDateTime)) => void;
}

export const CalendarDate = ({ onNextClick, onBackClick, dateTime, setDateTime }: ICalendarDate) => {
  const [activeDate, setActiveDate] = useState(false);
  const [activeTime, setActiveTime] = useState({ activeTime: false, index: 0 });
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState<Array<IDatabase>>([]);
  const db = getDatabase();

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

  const getWorkingTimeSlots = () => {
    if (!dateTime.date) {
      return null;
    }

    const { date } = dateTime;
    const startingHour = add(date, { hours: STARTING_WORKING_HOUR });
    const closingHour = add(date, { hours: CLOSING_WORKING_HOUR });

    const timeSlots = [];
    for (let i = startingHour; i < closingHour; i = add(i, { minutes: APPOINTMENT_DURATION })) {
      timeSlots.push(i);
    }

    return timeSlots;
  }

  const getBookedTimeSlots = () => appointments.filter(appointment => appointment.date === dateTime.date)
    .map(appointment => appointment.time);


  const bookedTimeSlots = getBookedTimeSlots();
  const timeSlots = getWorkingTimeSlots();

  return (
    <div className="flex flex-col gap-5 shadow-lg p-40 rounded-box bg-neutral-content">
      <h1 className="text-2xl font-bold self-center">Choose a date and time for your appointment.</h1>
      <Calendar
        locale='en'
        className='self-center'
        minDate={new Date()}
        view='month'
        onClickDay={(date) => {
          setDateTime((prev: IDateTime) => ({ ...prev, date: format(date, 'MMMM dd'), time: null }));
          setActiveDate(true);
          setActiveTime({ activeTime: false, index: 0 });
          setLoading(true);
        }}
      />

      {loading && setTimeout(() => setLoading(false), 1000) && (
        <div className="flex justify-center">
          <Loader />
        </div>
      )}

      {dateTime.date && !loading && (
        <div className="flex gap-4 justify-around flex-wrap w-[450px] self-center">
          {timeSlots?.map((timeSlot, index) => (
            <button
              key={`time-slot-${index}`}
              className={
                bookedTimeSlots.includes(format(timeSlot, 'kk:mm'))
                  ? 'btn btn-disabled'
                  : activeTime.activeTime && activeTime.index === index ? 'btn btn-primary' : 'btn btn-outline'
              }
              onClick={() => {
                setDateTime((prev) => ({ ...prev, time: format(timeSlot, 'kk:mm') }))
                setActiveTime({ activeTime: true, index });
              }}
            >
              {format(timeSlot, 'kk:mm')}
            </button>
          ))}
        </div>
      )}
      <button
        className="btn btn-primary text-lg w-full"
        disabled={activeDate && activeTime.activeTime ? false : true}
        onClick={onNextClick}
      >
        Next
      </button>
      <button
        className="btn btn-secondary text-lg w-full"
        onClick={onBackClick}
      >
        Back
      </button>
    </div>
  )
};