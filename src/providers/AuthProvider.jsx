import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";



// create auth context
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()

    // Continue With Google
    const continueWithGoogle = ()=>{
      return signInWithPopup(auth, googleProvider)
    }

     // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

     // sign in
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update profile
  const userProfile = (displayName, photoURL) => {
    const user = auth.currentUser;
    return updateProfile(user, { displayName, photoURL });
  };

  //   user log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };



    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
        // console.log("User", loggedUser);
        setUser(loggedUser);
        setLoading(false);
      });
      return () => {
        return unsubscribe();
      };
    }, []);


    const authInfo = {
      user,
      loading,
      loginUser,
      createUser,
      userProfile,
      continueWithGoogle,
      logOut
    }
    


    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
};

export default AuthProvider;