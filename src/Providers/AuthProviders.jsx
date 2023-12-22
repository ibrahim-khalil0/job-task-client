import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // login with google 
    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }



    // user registration with email and password 
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // login with email and password 
    const loginWithPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // user logOut 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    // user observe 
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, newUser => {
            setUser(newUser)
            setLoading(false)
        })
        return unSubscribe
    }, [])




    const authDetails = {
        loading,
        user,
        loginWithGoogle,
        createNewUser,
        loginWithPassword,
        logOut
    }
    return (
        <AuthContext.Provider value={authDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;