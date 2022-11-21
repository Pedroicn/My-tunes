import React from 'react'
import './login.css'

function Login() {
  return (
    <main className="main">
      <div className="container-form" data-testid="page-login">
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
              data-testid="login-name-input"
              type="text"
              name="emailInput"
              id="emailInput"
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
            />
          </div>
          <button
            type="submit"
          >
            Login
          </button>
          <button
            type="button"
            className="register-button"
          >
            New to MyTunes? Sign up for free!
          </button>

        </form>
      </div>
    </main>
  )
}

export default Login;
