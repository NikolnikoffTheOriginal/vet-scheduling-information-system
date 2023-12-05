import { useState } from "react"
import { FaUser } from "react-icons/fa"

enum UserForm {
  Login = 'Login',
  Register = 'Register',
  ForgotPasswor = 'ForgotPassword'
}

export const NavIcon = () => {
  const [userForm, setUserForm] = useState('');

  return (
    <div>
      <button
        onClick={() => {
          userForm === '' ? setUserForm(UserForm.Login) : setUserForm('');
        }}
      >
        <FaUser size={28} />
      </button>
    </div >
  )
}