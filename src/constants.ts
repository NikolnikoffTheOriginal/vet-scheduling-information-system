export const STARTING_WORKING_HOUR = 9;
export const CLOSING_WORKING_HOUR = 17;
export const APPOINTMENT_DURATION = 30;

export interface IDatabase {
  clientInfo: {
    status: string,
    name: string,
    email: string,
    phone: string,
    message: string,
  },
  date: Date,
  time: Date,
  petInfo: {
    name: string,
    species: string,
  },
  clinician: string,
  approved: boolean,
  uuid: string,
}

export interface IDateTime {
  date: Date | null;
  time: Date | null;
}