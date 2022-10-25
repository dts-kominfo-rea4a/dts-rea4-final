import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAn8TSKxigepBJZUesrXVIdSMtnm7drDsg",
    authDomain: "dts2022-react.firebaseapp.com",
    projectId: "dts2022-react",
    storageBucket: "dts2022-react.appspot.com",
    messagingSenderId: "524638971142",
    appId: "1:524638971142:web:84b81dbba33b82ad05ea87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailPassword = async (email, password) => {
    try{
        const user_credential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("registered user", user_credential.user);
    }catch(err){
        console.log("CODE", err.code);
        console.log("MSSG", err.message);
    }
}

const loginWithEmailPassword = async (email, password) => {
    try{
        const user_credential = await signInWithEmailAndPassword(auth, email, password);
        console.log("registered user", user_credential.user);
    }catch(err){
        console.log("CODE", err.code);
        console.log("MSSG", err.message);
    }
}

const logoutUser = async () => {
    try{
        await signOut(auth);
        console.log("logout success");
    }catch(err){
        console.log("CODE", err.code);
        console.log("MSSG", err.message);
    }
}

const resetPasswordWithEmail = async (email) => {
    try{
        await sendPasswordResetEmail(auth, email);
        console.log("reset password send to email", email);
    }catch(err){
        console.log("CODE", err.code);
        console.log("MSSG", err.message);
    }
}

export{
    auth,
    registerWithEmailPassword,
    loginWithEmailPassword,
    logoutUser,
    resetPasswordWithEmail
}