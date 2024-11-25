import { IDatabase } from "../../constants";

interface IAppointment {
  appointment: IDatabase;
  index: number;
}

export const VetAppointmentView = ({
  appointment,
  index,
}: IAppointment) => (
  <tr key={appointment.uuid} className="hover:bg-indigo-100 text-center">
    <th>{index + 1}</th>
    <td className="break-words whitespace-normal max-w-sm">
      {appointment.clientInfo.name}
    </td>
    <td className="break-words whitespace-normal max-w-sm">
      {appointment.clientInfo.email}
    </td>
    <td className="break-words whitespace-normal max-w-sm">
      {appointment.clientInfo.phone}
    </td>
    <td className="break-words whitespace-normal max-w-sm">
      {appointment.date}
    </td>
    <td className="break-words whitespace-normal max-w-sm">
      {appointment.time}
    </td>
    <td className="break-words whitespace-normal max-w-sm">
      {appointment.petInfo.name}
    </td>
    <td className="break-words whitespace-normal max-w-sm">
      {appointment.petInfo.species}
    </td>
    <td className="break-words whitespace-normal max-w-sm">
      {appointment.clinician}
    </td>
    <td className="break-words whitespace-normal max-w-sm">
      {appointment.clientInfo.message}
    </td>
  </tr>
);