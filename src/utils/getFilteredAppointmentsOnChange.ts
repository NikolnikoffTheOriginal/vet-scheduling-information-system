import { IDatabase } from "../constants";

export const getFilteredAppointmentsOnChange = (filteringOption: string, originalAppointments: Array<IDatabase>) => {
  let filteredAppointments: Array<IDatabase> = [];

  if (filteringOption === 'current date') {
    const currentDate = new Date();
    filteredAppointments = originalAppointments.filter(appointment => new Date(appointment.date + '' + appointment.time) === currentDate);
  }

  if (filteringOption === 'none') {
    filteredAppointments = originalAppointments;
  }

  if (filteringOption === 'clinician (John Doe)') {
    filteredAppointments = originalAppointments.filter(appointment => appointment.clinician === 'John Doe');
  }

  if (filteringOption === 'clinician (Alice Smith)') {
    filteredAppointments = originalAppointments.filter(appointment => appointment.clinician === 'Alice Smith');
  }

  if (filteringOption === 'dog') {
    filteredAppointments = originalAppointments.filter(appointment => appointment.petInfo.species === 'dog');
  }

  if (filteringOption === 'cat') {
    filteredAppointments = originalAppointments.filter(appointment => appointment.petInfo.species === 'cat');
  }

  return filteredAppointments;
}