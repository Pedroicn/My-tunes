import React, { useContext } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';
import './header.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  }
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
      <div className='user'>
        <p>
            { user &&  `User:  ${ user.email }` }
        </p>

        <button className="logout-button" onClick={ handleLogout }>
          logout
        </button>
        <ToastContainer />
      </div>
      
    </header>
  )
}

export default Header