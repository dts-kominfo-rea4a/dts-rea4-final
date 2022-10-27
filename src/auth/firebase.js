// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkMONyHTCtqU3P0QRBlFS6OqGM_fSmY8I",
  authDomain: "tribun-gabun.firebaseapp.com",
  projectId: "tribun-gabun",
  storageBucket: "tribun-gabun.appspot.com",
  messagingSenderId: "478495067140",
  appId: "1:478495067140:web:48a4c75431549d0a6ef951"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// buat user baru
const signUp = async (email, kataSandi) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, kataSandi);
    } catch (err) {
        console.log("CODE" + err.code);
        console.log("MESSAGE" + err.message);
    }
}

// masuk dengan fitur login

const signIn = async (email, kataSandi) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, kataSandi);
    } catch (err) {
        console.log("CODE" + err.code);
        console.log("MESSAGE" + err.message);
    }
}

// keluar dari akun

const logOut = async () => {
    try {
        await signOut(auth);
    } catch (err) {

    }
    
  };

export { auth, signUp, signIn, logOut};