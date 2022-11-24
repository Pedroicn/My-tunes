import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './login.css'
// require('dotenv').config()
// console.log(process.env)

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
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
        <form className="form-login">
          <h3>Login</h3>
          <div className="inputs">
            <i className="bi bi-envelope-at-fill fs-3" />
            <input
              className="input-login"
              placeholder="E-mail"
              type="text"
              name="emailInput"
              id="emailInput"
              value={ email }
              onChange={ handleEmail }
            />
          </div>
          <div className="inputs">
            <i className="bi bi-lock-fill fs-3" />
            <input
              className="input-login"
              placeholder="Password"
              type="password"
              name="passwordInput"
              id="password"
              value={ password }
              onChange={ handlePassword }
            />
          </div>
          <button
            type="submit"
          >
            Login
          </button>
          <div>
            <Link to='/register'>New to MyTunes? Sign up for free!</Link> 
          </div>

        </form>
      </div>
    </main>
  )
}

export default Login;
