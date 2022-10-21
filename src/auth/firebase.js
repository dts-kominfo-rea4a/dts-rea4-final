// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
} from "firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv0pH4aA0nzziVWqXKoDON4EBfNzofV4M",
  authDomain: "dts2022-e0321.firebaseapp.com",
  projectId: "dts2022-e0321",
  storageBucket: "dts2022-e0321.appspot.com",
  messagingSenderId: "195160060654",
  appId: "1:195160060654:web:c39583c5f2a4d6ec6ff9ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


//untuk GOOGLE
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("profile");
googleProvider.addScope("email");
googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');




const signInWithGoogle = async () => {
    try {
        const userCredential = await signInWithPopup(auth, googleProvider);
        console.log(userCredential);

    } catch (err) {
        console.log(err);
    }
}


//fungsi untuk registrasi
const registrasiEmailPassowrd = async (email, password) => {
    const response ={}
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        //aturan firebase setelah register maka akan otomatis langsung login/signin
        response.success = true;
        response.message = 'Create Accoung Successfully';
        //test
        console.log(userCredential.user);
        return response;
    } catch (err) {
        console.log(err.code)
        console.log(err.message)
        if(err.code=='auth/email-already-in-use'){
            response.message = 'Email Already in Use';
        }else{

            response.message = err.code;
        }
        response.success = false;
        return response;
    };
}
//fungsi login

const signInEmail = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        console.log(userCredential.user);
    } catch (err) {
        console.log(err.code)
        console.log(err.message)
    };
}


//fungsi untuk reset password

//fungsi logout
const logOut = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        console.log(err.code)
        console.log(err.message)
    };
}


export { auth, signInEmail, logOut, registrasiEmailPassowrd,  signInWithGoogle };
