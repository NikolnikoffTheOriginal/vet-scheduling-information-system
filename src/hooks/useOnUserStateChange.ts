import { useEffect } from "react";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export const useOnUserStateChange = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        navigate("/login");
      }
    });

    return unsubscribe;
  }, [navigate]);
}