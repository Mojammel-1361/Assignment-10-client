import React from 'react';
import { createContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../fairbase/fairbase.config';
import { useState } from 'react';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,  setUser] = useState(null)
    
    const googleLogin =(provider) =>{
        return signInWithPopup(auth, provider);
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




    const authInfo = { user, googleLogin };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;