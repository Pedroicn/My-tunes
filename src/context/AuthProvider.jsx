import React from 'react';
import AuthContext from './AuthContext';
import auth from '../services/firebase';
import { 
  createUserWithEmailAndPassword,
} from 'firebase/auth'

function AuthProvider({ children }) {

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const contextValue = { registerUser }
  return (
    <AuthContext.Provider value={ contextValue }>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider