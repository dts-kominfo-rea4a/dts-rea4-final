// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACe4_0LHH_phKj-cY9Xd-3P2vW1Qt9IaM",
  authDomain: "sj-news.firebaseapp.com",
  projectId: "sj-news",
  storageBucket: "sj-news.appspot.com",
  messagingSenderId: "597975223627",
  appId: "1:597975223627:web:d660a2ea5a0b27e83becce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const registrationWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User yang sudah regis adalah', userCredential.user);
    } catch(err) {
        console.log(err);
        console.log('Code: ', err.code); 
        console.log('Message: ', err.message); 
    }
} 
const signInWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User yang sudah login adalah', userCredential.user);
    } catch(err) {
        console.log(err);
        console.log('Code: ', err.code); 
        console.log('Message: ', err.message); 
    }
}

const signOut = async () => {
    try {
        await signOut(auth);
    } catch(err) {
        console.log(err);
    }
}

export { auth, registrationWithEmailAndPassword, signInWithEmailAndPassword, signOut }; 
