import { useState } from "react"
import { FaUser } from "react-icons/fa"
import { LoginForm } from "./components/LoginForm";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { TeamsList } from "./components/TeamsList";
import { PlayerSelections } from "./components/PlayerSelections";

export enum UserForm {
  Login = 'Login',
  Register = 'Register',
  ForgotPasswor = 'ForgotPassword'
}

function App() {
  const [userForm, setUserForm] = useState('');

  return (
    <div className="z-0">
      <div className="navbar bg-info">
        <div className="flex-1">
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={async () => {
              ReactDOM.createRoot(document.getElementById('root')!).render(
                <React.StrictMode>
                  <App />
                </React.StrictMode>,
              )
            }}>Tactics Genius</a>
        </div>
        <div className="flex-none gap-2">
          <div className="btn btn-ghost btn-circle avatar" onClick={() => {
            userForm === '' ? setUserForm(UserForm.Login) : setUserForm('');
          }}>
            <div>
              <div>
                <FaUser size={28} />
              </div >
            </div>
          </div>
        </div>
      </div>
      <LoginForm userForm={userForm} />
      <div className="flex mt-4">
        <TeamsList />
      </div>
    </div>
  )
}

export default App
