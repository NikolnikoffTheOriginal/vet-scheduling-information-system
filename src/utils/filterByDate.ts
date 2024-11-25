import { format } from "date-fns";
import { IDatabase } from "../constants";

export const filterByDate = (appointment: IDatabase, date: Date | null) => {
  if (!date || !appointment) {
    return;
  }

  const appointmentDate = new Date(`${appointment.date} ${appointment.time}`);
  return format(appointmentDate, 'MMMM dd') === format(date, 'MMMM dd');
}