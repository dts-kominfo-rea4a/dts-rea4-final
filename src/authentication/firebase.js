// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX9T9bsHAOYBJ4qSsxOtgmfC24mApNVcw",
  authDomain: "dts2022-3f4b7.firebaseapp.com",
  projectId: "dts2022-3f4b7",
  storageBucket: "dts2022-3f4b7.appspot.com",
  messagingSenderId: "1094094606116",
  appId: "1:1094094606116:web:95d735d17f7937b8f3adb1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const registerNewUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const signOutCurrentUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export { auth, registerNewUser, signInUser, signOutCurrentUser };
