import { getDatabase, ref, remove } from "firebase/database";
import { IDatabase } from "../constants";

export const getValidAppointments = (appointments: Array<IDatabase>) => {
  const db = getDatabase();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  if (appointments.length > 0) {
    appointments.forEach(appointment => {
      const appointmentDate = new Date(currentYear + appointment.date + " " + appointment.time);

      if (appointmentDate < currentDate) {
        remove(ref(db, "appointments/" + appointment.uuid));
      }
    });
  }

  return appointments;
}