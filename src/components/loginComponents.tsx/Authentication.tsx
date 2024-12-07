import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

enum User {
  'default',
  'admin',
  'vet'
}

export const Authentication = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState<User>(User.default);
  const [error, setError] = useState(false);

  const adminSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/adminDashboard");
    } catch (error) {
      setError(true);
    }
  }

  const vetSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/vetDashboard");
    } catch (error) {
      setError(true);
    }
  }

  const signOutUser = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    window.addEventListener("beforeunload", signOutUser);

    return () => {
      window.removeEventListener("beforeunload", signOutUser);
    }
  }, [])

  return (
    <div className="flex justify-center items-center flex-col">

      <div className="w-full bg-blue-600 text-white text-center md:text-left py-4 px-6">
        <h1 className="text-3xl font-semibold">Patient Scheduling Information System</h1>
      </div>
      <div className="w-full flex justify-center items-center min-h-[90vH]">
        {view === User.default && (
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-2xl font-bold">Select Your Role to Log In</h1>
            <p>Access the Dashboard for the Information System.</p>
            <button
              className="btn btn-primary text-lg"
              onClick={() => setView(User.admin)}
            >
              Admin
            </button>
            <button
              className="btn btn-primary text-lg"
              onClick={() => setView(User.vet)}
            >
              Vet
            </button>
          </div>
        )}

        {view === User.admin && (
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              adminSignIn();
            }}
          >
            <p className="text-2xl font-bold max-w-md text-center">
              To access the Admin Dashboard,
              please enter your admin credentials.
            </p>
            <label className={`input ${error ? 'input-error' : 'input-bordered'} flex items-center gap-2`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow bg-inherit"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(false);
                }}
              />
            </label>
            <label className={`input ${error ? 'input-error' : 'input-bordered'} flex items-center gap-2`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd" />
              </svg>
              <input
                type="password"
                className="grow bg-inherit"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
              />
            </label>
            {error && <span className='error text-red-600 self-center'>Wrong credentials</span>}
            <button
              type="submit"
              className="btn btn-primary text-lg"
            >
              Sign in
            </button>
            <button
              className="btn btn-secondary text-lg"
              onClick={() => setView(User.default)}
            >
              Back to user selection
            </button>
          </form>
        )}

        {view === User.vet && (
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              vetSignIn();
            }}
          >
            <p className="text-2xl font-bold max-w-md text-center">
              To access the Vet Dashboard,
              please enter your vet credentials.
            </p>
            <label className={`input ${error ? 'input-error' : 'input-bordered'} flex items-center gap-2`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow bg-inherit"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(false);
                }}
              />
            </label>
            <label className={`input ${error ? 'input-error' : 'input-bordered'} flex items-center gap-2`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd" />
              </svg>
              <input
                type="password"
                className="grow bg-inherit"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
              />
            </label>
            {error && <span className='error text-red-600 self-center'>Wrong credentials</span>}
            <button
              type="submit"
              className="btn btn-primary text-lg"
            >
              Sign in
            </button>
            <button
              className="btn btn-secondary text-lg"
              onClick={() => setView(User.default)}
            >
              Back to user selection
            </button>
          </form>
        )}
      </div>
      <footer className="text-black text-center py-4 mt-auto">&copy; Mikael Nikolnikov, ISCS, Diploma Work, 2024</footer>

    </div>
  )
}