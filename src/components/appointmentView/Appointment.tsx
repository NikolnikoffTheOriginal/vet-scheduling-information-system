
interface IAppointment {
  user: string,
  clientInfo: {
    status: string,
    name: string,
    email: string,
    phone: string,
    message: string,
  },
  date: string,
  time: string,
  petInfo: {
    name: string,
    species: string,
  },
  clinician: string,
  deleteFromDataBase?: () => void;
  updateDataBase?: () => void;
}

export const Appointment = ({
  clientInfo,
  clinician,
  date,
  petInfo,
  time,
  user,
  deleteFromDataBase,
  updateDataBase,
}: IAppointment) => (
  <div className="flex gap-2">
    <table className="table-auto bg-neutral-content border-gray-300 rounded-box w-[600px]">
      <tbody>
        <tr className="border-b border-gray-300">
          <td className="text-lg p-4">{`Date: ${date}`}</td>
          <td className="text-lg p-4 border-l border-gray-300">{`Time: ${time}`}</td>
        </tr>
        <tr className="border-b border-gray-300">
          <td className="text-lg p-4">{`Client name: ${clientInfo.name}`}</td>
          <td className="text-lg p-4 border-l border-gray-300">{`Pet name: ${petInfo.name}`}</td>
        </tr>
        <tr className="border-b border-gray-300">
          <td className="text-lg p-4">{`Phone number: ${clientInfo.phone}`}</td>
          <td className="text-lg p-4 border-l border-gray-300">{`Email: ${clientInfo.email}`}</td>
        </tr>
        <tr className="border-b border-gray-300">
          <td className="text-lg p-4">{`Vet: ${clinician}`}</td>
          <td className="text-lg p-4 border-l border-gray-300">{`Species: ${petInfo.species}`}</td>
        </tr>
        <tr>
          <td className="text-lg p-4">{`Message: ${clientInfo.message}`}</td>
        </tr>
      </tbody>
    </table>


    {user === 'admin' && (
      <>
        <button
          className="btn btn-sm btn-success"
          onClick={updateDataBase}
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 -0.5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#000000" />
          </svg>
        </button>
        <button
          className="btn btn-sm btn-error"
          onClick={deleteFromDataBase}
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
      </>
    )}
  </div >
);