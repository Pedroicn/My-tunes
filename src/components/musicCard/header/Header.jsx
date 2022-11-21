import React from 'react';
import { Link  } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header" data-testid="header-component">
      <nav className="nav-header">
        <Link
          className="links-header"
          to='/home'
        >
          Home
        </Link>
      </nav>
    </header>
  )
}

export default Header