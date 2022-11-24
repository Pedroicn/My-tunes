import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../services/firebase';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unRegister = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    })

    return () => unRegister();
  }, [])

  const contextValue = { registerUser, signIn, user }
  return (
    <AuthContext.Provider value={ contextValue }>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider