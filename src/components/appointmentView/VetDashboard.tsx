import { useRedirectToAuth } from "../../hooks/useRedirectToAuth";
import { useSignOut } from "../../hooks/useSignOut";
import { Appointment } from "./Appointment";

export const VetDashboard = () => {
  // iterate through every approved appointment
  useSignOut();
  useRedirectToAuth();

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="bg-white p-8 rounded-lg shadow-md flex items-center flex-col">
        <h1 className="text-2xl font-bold">Your upcoming appointments:</h1>
        <Appointment />
      </div>
    </div>
  );
}