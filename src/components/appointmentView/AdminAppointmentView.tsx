import { IDatabase } from "../../constants";

interface IAdminAppointmentView {
  appointment: IDatabase;
  updateAppoinemnt: (uuid: string, data: Partial<IDatabase>) => void;
  deleteFromDataBase: (uuid: string) => void;
  index: number;
}

export const AdminAppointmentView = ({ appointment, deleteFromDataBase, updateAppoinemnt, index }: IAdminAppointmentView) => (
  <tr key={appointment.uuid} className="hover text-center">
    <th>{index + 1}</th>
    <td>{appointment.clientInfo.name}</td>
    <td>{appointment.clientInfo.email}</td>
    <td>{appointment.clientInfo.phone}</td>
    <td>{appointment.date} {appointment.time}</td>
    <td>{appointment.petInfo.name}</td>
    <td>{appointment.petInfo.species}</td>
    <td>{appointment.clinician}</td>
    <td>{appointment.clientInfo.message}</td>
    <td>
      <select
        name="Status"
        defaultValue={appointment.approved ? 'Approved' : 'Pending'}
        className="bg-inherit"
        onChange={(e) => {
          if (e.target.value === 'Approved') {
            updateAppoinemnt(appointment.uuid, { ...appointment, approved: true });
          } else if (e.target.value === 'Pending') {
            updateAppoinemnt(appointment.uuid, { ...appointment, approved: false });
          }
        }}
      >
        <option>Pending</option>
        <option>Approved</option>
      </select>
    </td>
    <td>
      <button
        className="btn btn-sm btn-error"
        onClick={() => deleteFromDataBase(appointment.uuid)}
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 -0.5 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.5 6.5L18.5 18.5M6.5 18.5L18.5 6.5" stroke="#000000" />
        </svg>
      </button>
    </td>
  </tr>
);