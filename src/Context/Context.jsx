import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase.config";
import toast from "react-hot-toast";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

function Context({children}) {
const [user, setUser]= useState(null)
const [loading, setLoading] = useState(true);


// create user
  const Signup =(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

// sign in with email
const signInWithEmail= (email, password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}


// sign in with google
const signInWithGoogle= ()=>{
  setLoading(true)
  return signInWithPopup(auth, googleProvider)
}


// unsubscribe
useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth, curUser => {
      setUser(curUser);
      console.log(curUser)
      setLoading(false)
    });
    return  ()=>{
      return unsubscribe()
    }
      },[])

const updateUserProfile = (name, photo) => {
  return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo,
  })
}


const logout = async () => {
  setLoading(true)
  return signOut(auth)
}

const AuthInfo={
  user,
  setUser,
  Signup,
  signInWithEmail,
  signInWithGoogle,
  updateUserProfile,
  logout,
  loading,
  setLoading,
}

  return (
    <AuthContext.Provider  value={AuthInfo}>{children}</AuthContext.Provider>
  )
}

export default Context