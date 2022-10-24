// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// REACT_APP_FIREBASE_API_KEY=AIzaSyBatb2DeUPzUkXVOW1Meekhkk8c9_cOKTg
// REACT_APP_FIREBASE_AUTH_DOMAIN=dts-final-project-eba7c.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=dts-final-project-eba7c
// REACT_APP_FIREBASE_STORAGE_BUCKET=dts-final-project-eba7c.appspot.com
// REACT_APP_MESSAGE_SENDER_ID=860447898701
// REACT_APP_APP_ID=1:860447898701:web:d088db5c326438da103004

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);