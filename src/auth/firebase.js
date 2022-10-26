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
  apiKey: process.env.REACT_APP_FIREBASE_APPKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
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
    // console.log(err, err.code);
    return err;
  }
};

//Login Email
const signInWithEmail = async (email, password) => {
  try {
    // const userCredential = await signInWithEmailAndPassword(
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    // console.log(err, err.code);
    return err;
  }
};
//Login Google
const signInWithGoogle = async (email, password) => {
  try {
    // const userCredential = await signInWithPopup(auth, googleProvider);
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    // console.log(err, err.code);
    return err;
  }
};
//SignOut
const signOutMe = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("quran:tersimpan");
  } catch (err) {
    // console.log(err);
    return err;
  }
};

export { auth, signInWithEmail, signUpWithEmail, signInWithGoogle, signOutMe };
