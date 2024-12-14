import { format } from "date-fns";
import { IDatabase } from "../constants";

export const filterByDate = (appointment: IDatabase, date: Date | null) => {
  if (!date || !appointment) {
    return;
  }

  return appointment.date === format(date, 'dd/MM/yyyy');
}