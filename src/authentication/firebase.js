// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmiVjFA1QFrKojGlkYDvryiBBw9MTIa3k",
  authDomain: "dts-final-project-6ea49.firebaseapp.com",
  projectId: "dts-final-project-6ea49",
  storageBucket: "dts-final-project-6ea49.appspot.com",
  messagingSenderId: "690451337036",
  appId: "1:690451337036:web:42f764e78aafd0738f49e9",
};

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("profile");
googleProvider.addScope("email");

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (error) {
    console.log(error);
  }
};

const signInDenganEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (error) {
    console.log(error);
  }
};

const signOutFromApp = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

const signInWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    console.log(userCredential);
  } catch (error) {
    console.log("error : " + error);
  }
};

export {
  auth,
  registerWithEmailAndPassword,
  signInDenganEmailAndPassword,
  signInWithGoogle,
  signOutFromApp,
};
