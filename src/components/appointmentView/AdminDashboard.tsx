import { Appointment } from "./Appointment";

export const AdminDashboard = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        {/* iterate through every appointment. Also remove buttons if appointments does not exists */}
        <div className="flex items-baseline gap-2">
          <Appointment />
          <button className="btn btn-sm btn-success">
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
          <button className="btn btn-sm btn-error">
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
        </div>
      </div>
    </div>
  );
};