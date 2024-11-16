import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiZ1TvKRjKSfM-5pG33cOE1nuqddnMj94",
  authDomain: "vet-scheduling-system.firebaseapp.com",
  projectId: "vet-scheduling-system",
  storageBucket: "vet-scheduling-system.firebasestorage.app",
  messagingSenderId: "545522712917",
  appId: "1:545522712917:web:cdbc7f9becd7d49f1defdc",
  measurementId: "G-MBQYMQJM1B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);