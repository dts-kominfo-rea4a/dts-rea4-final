// Di sini kita akan import beberapa fungsi dari package firebase
import { initializeApp } from "firebase/app";

// Di sini kita akan import beberapa fungsi dari package firebase/auth
// Firebase ini sebenarnya memungkinkan kita untuk bisa login dengan banyak sekali
// Provider (Google, Github, Meta, dsb).

// Tapi pada pembelajaran ini kita akan menggunakannya via Email saja yah
import {
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithPopup,
    signOut,
} from "firebase/auth";

// Ini adalah konfigurasi yang di-copy dari halaman Firebase (SDK Setup and Configuration)
// Kita pilih yang versi "config" saja

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5HCoWw9TzYr-liNQABi0RkIPXHv98YNY",
    authDomain: "dtskominfo2022.firebaseapp.com",
    projectId: "dtskominfo2022",
    storageBucket: "dtskominfo2022.appspot.com",
    messagingSenderId: "282939457710",
    appId: "1:282939457710:web:cd6b10a61775b54b456d3f"
};

// Inisialisasi Firebase dan menggunakan Authentcation
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const githubProvider = new GithubAuthProvider();
githubProvider.addScope("repo");

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("profile");
googleProvider.addScope("email");

// Fungsi untuk Register
// Kita gunakan versi async / await untuk memudahkan yah
const registerWithEmailAndPass = async (email, password) => {
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
        console.log(err);
    }
};

// Fungsi untuk Login
// Kita gunakan versi async / await untuk memudahkan yah
const signInWithEmailAndPass = async (email, password) => {
    // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log("User yang berhasil login adalah", userCredential.user);
    } catch (err) {
        console.log(err);

        // Sama dengan register
        console.log("error code auth", err.code);
        console.log("error message auth", err.message);
    }
};


const signInWithGithub = async () => {
    try {
        const userCredential = await signInWithPopup(auth, githubProvider);
        console.log(userCredential);
    } catch (err) {
        console.log(err);
    }
};

const signInWithGoogle = async () => {
    try {
        const userCredential = await signInWithPopup(auth, googleProvider);
        console.log(userCredential);
    } catch (err) {
        console.log(err);
    }
};

// Fungsi untuk reset Password
const resetPassword = async (email) => {
    // Dokumentasi: https://firebase.google.com/docs/reference/js/auth.md#sendpasswordresetemail
    try {
        await sendPasswordResetEmail(auth, email);

        console.log("Password reset sudah dikirimkan");
    } catch (err) {
        console.log(err);
    }
};

// Fungsi untuk sign out
const keluarDariApps = async () => {
    // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#next_steps
    try {
        await signOut(auth);
    } catch (err) {
        console.log(err);
    }
};

// Export seluruh fungsi yang dibuat + auth
export {
    auth, // Nanti akan digunakan untuk hooks react-hooks-firebase
    registerWithEmailAndPass,
    signInWithEmailAndPass,
    signInWithGoogle,
    signInWithGithub,
    resetPassword,
    keluarDariApps,
};
