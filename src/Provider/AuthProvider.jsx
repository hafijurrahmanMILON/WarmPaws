import React, { useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const createUserFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginFunc = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signOutFunc = () => {
    return signOut(auth);
  };

  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUserFunc,
    loginFunc,
    googleSignIn,
    signOutFunc,
    updateProfileFunc,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
