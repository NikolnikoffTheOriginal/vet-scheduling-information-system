import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase-config";

export const useSignOutOnRefresh = () => {
  const signOutUser = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    window.addEventListener("beforeunload", signOutUser);

    return () => {
      window.removeEventListener("beforeunload", signOutUser);
    }
  }, [])
};