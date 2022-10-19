// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQoCDSClUy6WjgIsqDlsz8D3orF9tGaQw",
  authDomain: "reactapp-930ee.firebaseapp.com",
  projectId: "reactapp-930ee",
  storageBucket: "reactapp-930ee.appspot.com",
  messagingSenderId: "144344169244",
  appId: "1:144344169244:web:3e71fcfac40d71b77fd8d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("profile");
googleProvider.addScope("email");

const signUpWithEmail = async (email, password) => {
  try {
    // const userCredential = await createUserWithEmailAndPassword(
    await createUserWithEmailAndPassword(auth, email, password);
    // console.log("User yang sudah teregister", userCredential.user);
  } catch (err) {
    console.log(err);
    console.log("CODE", err.code);
    console.log("MSG", err.message);
    return err;
  }
};

//Login Email
const signInWithEmail = async (email, password) => {
  try {
    // const userCredential = await signInWithEmailAndPassword(
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
    console.log("CODE", err.code);
    console.log("MSG", err.message);
    return err;
  }
};
//Login Google
const signInWithGoogle = async (email, password) => {
  try {
    // const userCredential = await signInWithPopup(auth, googleProvider);
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.log(err);
    console.log("CODE", err.code);
    console.log("MSG", err.message);
    return err;
  }
};
//SignOut
const signOutMe = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
    return err;
  }
};

export { auth, signInWithEmail, signUpWithEmail, signInWithGoogle, signOutMe };
