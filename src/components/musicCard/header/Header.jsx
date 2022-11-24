import React, { useContext } from 'react';
import { Link  } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';
import './header.css';

function Header() {
  const { user } = useContext(AuthContext);
  return (
    <header className="header">
      <nav className="nav-header">
        <Link
          className="links-header"
          to='/home'
        >
          Home
        </Link>
      </nav>
      <p>
          {user.email}
      </p>
    </header>
  )
}

export default Header