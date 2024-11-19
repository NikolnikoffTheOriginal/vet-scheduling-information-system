import { IDatabase } from "../constants";

export const getFilteredAppointmentsOnChange = (filteringOption: string, originalAppointments: Array<IDatabase>) => {
  let filteredAppointments: Array<IDatabase> = [];

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

  if (filteringOption === 'other pet species') {
    filteredAppointments = originalAppointments.filter(appointment => appointment.petInfo.species !== 'dog' && appointment.petInfo.species !== 'cat');
  }

  if (filteringOption === 'approved') {
    filteredAppointments = originalAppointments.filter(appointment => appointment.approved);
  }

  if (filteringOption === 'not approved') {
    filteredAppointments = originalAppointments.filter(appointment => !appointment.approved);
  }

  return filteredAppointments;
}