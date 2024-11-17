import { IDatabase } from "../constants";

export const filterByDate = (appointments: Array<IDatabase>) => {
  const currentDate = new Date()

  return appointments.filter(appointment => new Date(appointment.date + '' + appointment.time) === currentDate);
}