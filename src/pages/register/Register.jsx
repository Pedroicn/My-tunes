import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../../context/AuthContext';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const { registerUser } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleRepeatPassword = ({ target: { value } }) => {
    setRepeatPassword(value);
  };

  const singUp = async () => {
    const TWO_SECONDS = 2000;
    try {
      await registerUser(email, password);
      toast.success('registered successfully', {
        autoClose: 2000,
        position:'top-left'
      });
      setTimeout(() => navigate('/'), TWO_SECONDS);
      setPassword('');
      setRepeatPassword('');
      setEmail('');
    } catch (error) {
      toast.error(error.message, { position:'top-left' });
    }
  }


  const handleClickRegister = async (e) => {
    e.preventDefault();
    if (!email || !password || !repeatPassword) {
      toast.error('FILL IN ALL FIELDS');
    } else if (password !== repeatPassword) {
      toast.error('Passwords must be the same!');
      setPassword('');
      setRepeatPassword('');
    } else {
      singUp();
    }
  };

  return (
    <main className="main">
      <div className="container-form">
        <h1 className="title">My Tunes</h1>
        <i
          className="bi bi-music-note-list fs-3"
        >
          The best way to listen to music
        </i>
        <form className="form-register" onSubmit={ handleClickRegister }>
          <h3>Registration</h3>
          <div className="inputs-register">
            <span>Register your e-mail</span>
            <input
              className="input-login"
              placeholder="E-mail"
              type="email"
              name="emailInput"
              value={ email }
              onChange={ handleEmail }
            />
          </div>
          <div className="inputs-register">
            <span>Register your password</span>
            <input
              className="input-login"
              placeholder="Password"
              type="password"
              name="passwordInput"
              value={ password }
              onChange={ handlePassword }
            />
          </div>
          <div className="inputs-register">
            <span>Confirm your password</span>
            <input
              className="input-login"
              placeholder="Repeat password"
              type="password"
              name="repeatPasswordInput"
              value={ repeatPassword }
              onChange={ handleRepeatPassword }
            />
          </div>
          <button
            type="submit"
          >
            Sign up
          </button>

          <div>
            <Link to='/'>Already have an account? Log in</Link> 
          </div>

        </form>
        <ToastContainer />
      </div>
    </main>
  )
}

export default Register