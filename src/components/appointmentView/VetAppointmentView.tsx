import { useState } from "react";
import { IDatabase } from "../../constants";

interface IAppointment {
  appointment: IDatabase;
  index: number;
  updateAppointment: (uuid: string, data: Partial<IDatabase>) => void;
}

export const VetAppointmentView = ({
  appointment,
  index,
  updateAppointment,
}: IAppointment) => {
  const [doctorNote, setDoctorNote] = useState(appointment.doctorNote || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    updateAppointment(appointment.uuid, { ...appointment, doctorNote });
  };

  return (
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
      <td className="break-words whitespace-normal max-w-sm">
        {isEditing ? (
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            value={doctorNote}
            onChange={(e) => setDoctorNote(e.target.value)}
            onBlur={handleSave}
            autoFocus
          />
        ) : (
          <div
            className="cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            {doctorNote || <span className="text-gray-500 italic">Click to add a note</span>}
          </div>
        )}
      </td>

    </tr>
  )
}