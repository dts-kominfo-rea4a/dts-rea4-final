// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    // sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9tIHfkaqN7WO2ynz4JwAkMUzMqr_v1fE",
    authDomain: "trinews-ae345.firebaseapp.com",
    projectId: "trinews-ae345",
    storageBucket: "trinews-ae345.appspot.com",
    messagingSenderId: "615197375105",
    appId: "1:615197375105:web:32d71898ada62861adeb80",
    measurementId: "G-BLMPJF633T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerEmailAndPassword = async (email, password) => {
    // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth
    try {
        const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
        );

        console.log(
        "User yang teregistrasi dan berhasil login adalah",
        response.user
        );
    } catch (err) {
    return err.message;
    }
};


    const loginWithEmailAndPassword = async (email, password) => {
    
    try {
        const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
        );

        console.log("User yang berhasil login adalah", userCredential.user);
    } catch (err) {
        return err.message;
    }
};

    const logout = async () => {
    
    try {
        await signOut(auth);
    } catch (err) {
        console.log(err);
    }
    };


    export {
    auth, 
    registerEmailAndPassword,
    loginWithEmailAndPassword,
    logout,
};

