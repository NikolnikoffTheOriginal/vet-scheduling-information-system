import { useEffect, useState } from "react";
import { Loader } from "../additionalComponents/Loader";
import { Appointment } from "./Appointment";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

export const VetDashboard = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setLoading(false);
      if (!user) {
        navigate("/login");
      }
    });

    return unsubscribe;
  }, [navigate]);

  const signOut = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      {loading ? (
        <Loader />
      ) : (

        <div className="bg-white p-8 rounded-lg shadow-md flex items-center flex-col gap-2">
          <h1 className="text-2xl font-bold">Your upcoming appointments:</h1>
          <Appointment />
          <button
            className="btn btn-primary w-full"
            onClick={signOut}
          >Log out</button>
        </div>
      )}
    </div>
  );
}