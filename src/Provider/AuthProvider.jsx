import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import {  signOut } from "firebase/auth";
import app from "../Firebase/Firebase";

 export const AuthContext=createContext(null)
 const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  


 const createUser=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
 }
 const singIn=(email,password)=>{
  return signInWithEmailAndPassword(auth ,email,password)
 }
 const logOut=()=>{
  return signOut(auth) 
 }
 
 useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth ,currentUser=>{
    console.log('user in auth state change',currentUser);
    setUser(currentUser)

  })
  return()=>{
    unSubscribe();
  }
 },[])
 

  const AuthInfo={
    user,
    createUser,
    singIn,
    logOut,
  }
  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;