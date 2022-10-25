import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../auth/firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';


const AuthContext = createContext();

export function AuthContextProvider({children}) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }  

  function addFirebaseUser(email) {
    try {
      const docRef = addDoc(collection(db, "users"), {
        email: email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
    });
    return () => { 
      unsubscribe();
    }
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user, addFirebaseUser, }}>
      {children}
    </AuthContext.Provider>
  )
}
export function UserAuth() {
  return useContext(AuthContext);
}