import React from 'react';
import AuthContext from './AuthContext';
import auth from '../services/firebase';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

function AuthProvider({ children }) {

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const contextValue = { registerUser, signIn }
  return (
    <AuthContext.Provider value={ contextValue }>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider