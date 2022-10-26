import React from 'react';
import { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../fairbase/fairbase.config';
import { useState } from 'react';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,  setUser] = useState(null)

    const signIn =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const gitLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }
    const googleLogin =(provider) =>{
        return signInWithPopup(auth, provider);
    }
    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe =onAuthStateChanged(auth, (currentUser) =>{
            console.log("user state change", currentUser);
            setUser(currentUser);
        });
        return () =>{
            unsubscribe();
        }
    },[])




    const authInfo = {
      user,
      googleLogin,
      logOut,
      createUser,
      signIn,
      gitLogin,
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;