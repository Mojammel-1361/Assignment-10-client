import React from 'react';
import { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile } from "firebase/auth";
import app from '../../fairbase/fairbase.config';
import { useState } from 'react';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,  setUser] = useState(null);
    const [loading, setLoading] =useState(true);

    const updatUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }

    const signIn =(email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const gitLogin = (provider) =>{
        
        return signInWithPopup(auth, provider);
    }
    const googleLogin =(provider) =>{
        
        return signInWithPopup(auth, provider);
    }
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe =onAuthStateChanged(auth, (currentUser) =>{
            console.log("user state change", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
    },[])




    const authInfo = {
      user,
      loading,
      googleLogin,
      logOut,
      createUser,
      signIn,
      gitLogin,
      updatUserProfile, 
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;