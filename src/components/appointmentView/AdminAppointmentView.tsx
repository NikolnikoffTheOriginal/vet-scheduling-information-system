import { useState } from "react";
import { IDatabase } from "../../constants";
import { validateEmail } from "../../utils/validateEmail";
import { sendEmail } from "../../utils/sendEmail";
import { isValidPhoneNumber } from "react-phone-number-input";

interface IAdminAppointmentView {
  appointment: IDatabase;
  updateAppoinemnt: (uuid: string, data: Partial<IDatabase>) => void;
  deleteFromDataBase: (uuid: string) => void;
  index: number;
}

export const AdminAppointmentView = ({ appointment, deleteFromDataBase, updateAppoinemnt, index }: IAdminAppointmentView) => {
  const [showEdit, setShowEdit] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [clinician, setClinician] = useState(appointment.clinician);
  const [date, setDate] = useState(appointment.date);
  const [time, setTime] = useState(appointment.time);
  const [message, setMessage] = useState(appointment.clientInfo.message);
  const [name, setName] = useState(appointment.clientInfo.name);
  const [email, setEmail] = useState(appointment.clientInfo.email);
  const [phone, setPhone] = useState(appointment.clientInfo.phone);
  const [petName, setPetName] = useState(appointment.petInfo.name);
  const [species, setSpecies] = useState(appointment.petInfo.species);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    deleteFromDataBase(appointment.uuid);
    setShowDeleteModal(false);
  };

  return (
    <>
      <tr key={appointment.uuid} className="hover:bg-indigo-100 text-center">
        <th>{index + 1}</th>
        <td className="whitespace-normal break-words">
          <input
            className="text-center"
            disabled={showEdit}
            value={name}
            placeholder={appointment.clientInfo.name}
            onChange={(e) => setName(e.target.value)}
          />
        </td>
        <td className="whitespace-normal break-words">
          <input
            className={`text-center ${emailError ? 'input-error' : ''}`}
            disabled={showEdit}
            value={email}
            placeholder={appointment.clientInfo.email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);

              if (!validateEmail(e.target.value)) {
                setEmailError(true);
              }
            }}
          />
          {emailError && <p className="text-xs text-error">Please enter a valid email address.</p>}
        </td>
        <td className="whitespace-normal break-words">
          <input
            className={`text-center ${phoneError ? 'input-error' : ''}`}
            disabled={showEdit}
            value={phone}
            placeholder={appointment.clientInfo.phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setPhoneError(false);

              if (!isValidPhoneNumber(e.target.value)) {
                setPhoneError(true);
              }
            }}
          />
          {phoneError && <p className="text-xs text-error">Please enter a valid phone number.</p>}
        </td>
        <td className="whitespace-normal break-words">
          <input
            className="text-center"
            disabled={showEdit}
            value={date}
            placeholder={appointment.date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </td>
        <td className="whitespace-normal break-words">
          <input
            className="text-center"
            disabled={showEdit}
            value={time}
            placeholder={appointment.time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </td>
        <td className="whitespace-normal break-words">
          <input
            className="text-center placeholder:text-black"
            disabled={showEdit}
            value={petName}
            placeholder={appointment.petInfo.name}
            onChange={(e) => setPetName(e.target.value)}
          />
        </td>
        <td className="whitespace-normal break-words">
          <input
            className="text-center"
            disabled={showEdit}
            value={species}
            placeholder={appointment.petInfo.species}
            onChange={(e) => setSpecies(e.target.value)}
          />
        </td>
        <td className="whitespace-normal break-words">
          <select
            className="text-center disabled:bg-inherit disabled:text-black"
            disabled={showEdit}
            defaultValue={appointment.clinician}
            onChange={(e) => setClinician(e.target.value)}
          >
            <option>John Doe</option>
            <option>Alice Smith</option>
          </select>
        </td>
        <td className="relative group">
          <input
            className="text-center"
            disabled={showEdit}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder={appointment.clientInfo.message}
          />
          <div className="absolute left-0 top-full mt-1 hidden w-max max-w-xs p-2 bg-gray-700 text-white text-xs rounded shadow-lg group-hover:block z-50 break-words">
            {message || appointment.clientInfo.message}
          </div>
        </td>
        <td className="whitespace-normal break-words">
          <select
            name="Status"
            defaultValue={appointment.approved ? 'Approved' : 'Pending'}
            disabled={!showEdit}
            className="bg-inherit"
            onChange={(e) => {
              if (e.target.value === 'Approved') {
                updateAppoinemnt(appointment.uuid, { ...appointment, approved: true });
                sendEmail(appointment.clientInfo.name, appointment.clientInfo.email, appointment.date, appointment.time)
              } else if (e.target.value === 'Pending') {
                updateAppoinemnt(appointment.uuid, { ...appointment, approved: false });
              }
            }}
          >
            <option>Pending</option>
            <option>Approved</option>
          </select>
        </td>
        <td className="flex flex-col items-center">
          <button
            className="btn btn-primary btn-sm"
            disabled={emailError || phoneError}
            onClick={() => {
              setShowEdit(!showEdit);

              if (!showEdit && !emailError && !phoneError) {
                updateAppoinemnt(appointment.uuid, { ...appointment, clientInfo: { ...appointment.clientInfo, name, email, phone, message }, clinician, date, time, petInfo: { name: petName, species } });
              }
            }}
          >
            {!showEdit ? 'Save' : 'Edit'}
          </button>

          {!showEdit && (
            <td className="whitespace-normal break-words">
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  setShowEdit(!showEdit);
                  setEmailError(false);
                  setPhoneError(false);
                  setClinician(appointment.clinician);
                  setDate(appointment.date);
                  setTime(appointment.time);
                  setMessage(appointment.clientInfo.message);
                  setName(appointment.clientInfo.name);
                  setEmail(appointment.clientInfo.email);
                  setPhone(appointment.clientInfo.phone);
                  setPetName(appointment.petInfo.name);
                  setSpecies(appointment.petInfo.species);
                }}
              >
                Cancel
              </button>
            </td>
          )}
        </td>
        <td className="whitespace-normal break-words">
          <button
            className="btn btn-sm btn-error"
            onClick={() => setShowDeleteModal(true)}
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

      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this appointment?</p>
            <div className="flex justify-end gap-4">
              <button className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>Cancel</button>
              <button className="btn btn-error" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}