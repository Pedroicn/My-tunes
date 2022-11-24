import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../services/firebase';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    // }
    // console.log(auth);
  }

  const logout = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unRegister = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })

    return () => unRegister();
  }, [])

  const contextValue = { registerUser, signIn, logout, user, signInGoogle }
  return (
    <AuthContext.Provider value={ contextValue }>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider