import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function ProtectedRoute({ Children }) {
  const { user } = useContext(AuthContext)

    if (!user) {
      return <Navigate to='/'></Navigate>
    }
    return Children;

}

export default ProtectedRoute;