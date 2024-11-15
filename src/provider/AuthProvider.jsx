import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(loading,user);
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);

  };
const userLogIn = (email, password) =>{
  setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (updatedData) =>{
    return updateProfile(auth.currentUser, updatedData);
  }

  // signin with google
  const signInWithGooglePopUp = () =>{
    return signInWithPopup(auth, googleProvider);
  }
  // signInWithGithub
  const signInWithGithub = () =>{
    return signInWithPopup(auth, gitHubProvider);
  }

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogIn,
    loading,
    updateUserProfile,
    signInWithGooglePopUp,
    signInWithGithub
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
