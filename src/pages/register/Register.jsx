import React from 'react'

function Register() {
  return (
    <main className="main">
      <div className="container-form">
        <h1 className="title">My Tunes</h1>
        <i
          className="bi bi-music-note-list fs-3"
        >
          The best way to listen to music
        </i>
        <form className="form-register">
          <h3>Registration</h3>
          <div className="inputs-register">
            <span>Register your e-mail</span>
            <input
              className="input-login"
              placeholder="E-mail"
              type="email"
              name="emailInput"
            />
          </div>
          <div className="inputs-register">
            <span>Register your password</span>
            <input
              className="input-login"
              placeholder="Password"
              type="password"
              name="passwordInput"

            />
          </div>
          <div className="inputs-register">
            <span>Confirm your password</span>
            <input
              className="input-login"
              placeholder="Repeat password"
              type="password"
              name="repeatPasswordInput"

            />
          </div>
          <button
            type="submit"
          >
            Sign up
          </button>

          <button
            type="button"
            className="register-button"
          >
            Already have an account? Log in
          </button>

        </form>
      </div>
    </main>
  )
}

export default Register