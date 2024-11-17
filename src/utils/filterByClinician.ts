import { IDatabase } from "../constants";

export const filterByClinician = (appointments: Array<IDatabase>, clinician: string) => {
  return appointments.filter(appointment => appointment.clinician === clinician);
}