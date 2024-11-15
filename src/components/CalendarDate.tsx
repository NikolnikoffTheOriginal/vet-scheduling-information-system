import { add, format } from "date-fns";
import { useState } from "react";
import Calendar from "react-calendar";
import { STARTING_WORKING_HOUR, CLOSING_WORKING_HOUR, APPOINTMENT_DURATION } from "../constants";
import { Loader } from "./Loader";

interface IDateTime {
  date: Date | null;
  time: Date | null;
}

interface ICalendarDate {
  onNextClick: () => void;
  onBackClick: () => void;
}

export const CalendarDate = ({ onNextClick, onBackClick }: ICalendarDate) => {
  const [dateTime, setDateTime] = useState<IDateTime>({ date: null, time: null });
  const [activeDate, setActiveDate] = useState(false);
  const [activeTime, setActiveTime] = useState({ activeTime: false, index: 0 });
  const [loading, setLoading] = useState(false);

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

  const timeSlots = getWorkingTimeSlots();

  return (
    <div className="flex flex-col gap-5 shadow-lg p-40 rounded-box bg-neutral-content">
      <p className="self-center">Choose a date for your appointment.</p>
      <Calendar
        locale='en'
        minDate={new Date()}
        view="month"
        onClickDay={(date) => {
          setDateTime((prev) => ({ ...prev, date, time: null }));
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
        <div className="flex gap-4 justify-around flex-wrap w-[450px]">
          {timeSlots?.map((timeSlot, index) => (
            <button
              key={`time-slot-${index}`}
              className={activeTime.activeTime && activeTime.index === index ? 'btn btn-primary' : 'btn btn-outline'}
              onClick={() => {
                setDateTime((prev) => ({ ...prev, time: timeSlot }))
                setActiveTime({ activeTime: true, index });
              }}
            >
              {format(timeSlot, 'kk:mm')}
            </button>
          ))}
        </div>
      )}
      <button
        className="btn btn-primary"
        disabled={activeDate && activeTime.activeTime ? false : true}
        onClick={onNextClick}
      >
        Next
      </button>
      <button
        className="btn btn-secondary"
        onClick={onBackClick}
      >
        Back
      </button>
    </div>
  )
};