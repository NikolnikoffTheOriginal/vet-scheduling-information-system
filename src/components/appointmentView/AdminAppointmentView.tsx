import { useState } from "react";
import { IDatabase } from "../../constants";
import { isValid, parse } from "date-fns";

interface IAdminAppointmentView {
  appointment: IDatabase;
  updateAppoinemnt: (uuid: string, data: Partial<IDatabase>) => void;
  deleteFromDataBase: (uuid: string) => void;
  index: number;
}

export const AdminAppointmentView = ({ appointment, deleteFromDataBase, updateAppoinemnt, index }: IAdminAppointmentView) => {
  const [showEdit, setShowEdit] = useState(true);
  const validateDate = (date: string) => {
    const parsedDate = parse(date, 'MMMM dd kk:mm', appointment.date);

    if (!isValid(parsedDate)) {
      return false;
    }

    return true;
  }

  return (
    <tr key={appointment.uuid} className="hover text-center">
      <th>{index + 1}</th>
      <td>
        <input
          className="text-center"
          disabled={showEdit}
          value={appointment.clientInfo.name}
          onChange={(e) => updateAppoinemnt(appointment.uuid, { ...appointment, clientInfo: { ...appointment.clientInfo, name: e.target.value } })}
        />
      </td>
      <td>
        <input
          className="text-center"
          disabled={showEdit}
          value={appointment.clientInfo.email}
          onChange={(e) => updateAppoinemnt(appointment.uuid, { ...appointment, clientInfo: { ...appointment.clientInfo, email: e.target.value } })}
        />
      </td>
      <td>
        <input
          className="text-center"
          disabled={showEdit}
          value={appointment.clientInfo.phone}
          onChange={(e) => updateAppoinemnt(appointment.uuid, { ...appointment, clientInfo: { ...appointment.clientInfo, phone: e.target.value } })}
        />
      </td>
      <td>
        <input
          className="text-center"
          disabled={showEdit}
          value={`${appointment.date} ${appointment.time}`}
          onChange={(e) => {
            if (validateDate(e.target.value)) {
              updateAppoinemnt(appointment.uuid, { ...appointment, date: e.target.value });
            }
          }}
        />
      </td>
      <td>
        <input
          className="text-center"
          disabled={showEdit}
          value={appointment.petInfo.name}
          onChange={(e) => updateAppoinemnt(appointment.uuid, { ...appointment, petInfo: { ...appointment.petInfo, name: e.target.value } })}
        />
      </td>
      <td>
        <input
          className="text-center"
          disabled={showEdit}
          value={appointment.petInfo.species}
          onChange={(e) => updateAppoinemnt(appointment.uuid, { ...appointment, petInfo: { ...appointment.petInfo, species: e.target.value } })}
        />
      </td>
      <td>
        <select
          className="text-center"
          disabled={showEdit}
          defaultValue={appointment.clinician}
          onChange={(e) => updateAppoinemnt(appointment.uuid, { ...appointment, clinician: e.target.value })}
        >
          <option>John Doe</option>
          <option>Alice Smith</option>
        </select>
      </td>
      <td className="relative group">
        <input
          className="text-center"
          disabled={showEdit}
          onChange={(e) => updateAppoinemnt(appointment.uuid, { ...appointment, clientInfo: { ...appointment.clientInfo, message: e.target.value } })}
          value={appointment.clientInfo.message}
        />
        <div className="absolute left-0 top-full mt-1 hidden w-max max-w-xs p-2 bg-gray-700 text-white text-xs rounded shadow-lg group-hover:block">
          {appointment.clientInfo.message}
        </div>
      </td>
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
          className="btn btn-primary btn-sm"
          onClick={() => {
            setShowEdit(!showEdit);

            if (showEdit) {
              updateAppoinemnt(appointment.uuid, appointment);
            }
          }}
        >
          {!showEdit ? 'Save' : 'Edit'}
        </button>
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
}