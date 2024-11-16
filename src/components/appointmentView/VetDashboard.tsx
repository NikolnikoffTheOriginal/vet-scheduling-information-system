import { useEffect, useState } from "react";
import { useSignOut } from "../../hooks/useSignOut";
import { Loader } from "../additionalComponents/Loader";
import { Appointment } from "./Appointment";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

export const VetDashboard = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useSignOut();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setLoading(false);
      if (!user) {
        navigate("/login");
      }
    });

    return unsubscribe;
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-[100vh]">
      {loading ? (
      <Loader />
      ) : (

      <div className="bg-white p-8 rounded-lg shadow-md flex items-center flex-col">
        <h1 className="text-2xl font-bold">Your upcoming appointments:</h1>
        <Appointment />
      </div>
      )}
    </div>
  );
}