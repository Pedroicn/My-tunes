import React from 'react'
import { Navigate } from 'react-router-dom'

function Header() {
  return (
    <header className="header" data-testid="header-component">
      <nav className="nav-header">
        <button
          type="button"
          className="links-header"
          onClick={ () => <Navigate to="/home" /> }

        >
          Search
        </button>
        <button
          type="button"
          onClick={ () => <Navigate to="/" /> }
          className="links-header"
        >
          Logout
        </button>
      </nav>
    </header>
  )
}

export default Header