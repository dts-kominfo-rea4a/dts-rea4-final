// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq_zibX3Qg733xPDSLG8AEQPesrq0hd2A",
  authDomain: "news-b06f9.firebaseapp.com",
  projectId: "news-b06f9",
  storageBucket: "news-b06f9.appspot.com",
  messagingSenderId: "439305941260",
  appId: "1:439305941260:web:a195abd04a96d09c28d929"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// inisialisasi firebase Auth
const auth = getAuth(app);

//fungsi untuk melakukan registrasi email dan password
const registrasiDenganEmailDanPassword = async (email, kataSandi) => {
    try {
        const useCredential = await createUserWithEmailAndPassword(auth, email, kataSandi);
    } catch(err) {
        console.log(err);
        console.log("CODE",err.code);
        console.log("MSG",err.message);
    }
}

//fungsi untuk melakukan signin email dan password
const singInDenganEmailDanPassword = async (email, kataSandi) => {
    try {
        const useCredential = await signInWithEmailAndPassword(auth, email, kataSandi);

        console.log("user yg sudah login adalah", useCredential.user);
    } catch(err) {
        console.log(err);
        console.log("CODE",err.code);
        console.log("MSG",err.message);
    }
}

//fungsi untuk melakukan signout
const keluarDariAplikasi = async () => {
    try {
        await signOut(auth);
    }catch (err) {
        console.log(err);
    }
}


export {
    auth,
    registrasiDenganEmailDanPassword,
    singInDenganEmailDanPassword,
    keluarDariAplikasi,
};