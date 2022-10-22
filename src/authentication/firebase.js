import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  // sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmBTsfloTRMqn59QBXGAq29TAzTZEPazk",
  authDomain: "movies-app-c1b1e.firebaseapp.com",
  projectId: "movies-app-c1b1e",
  storageBucket: "movies-app-c1b1e.appspot.com",
  messagingSenderId: "462342635329",
  appId: "1:462342635329:web:81aa78b7dae0119302ebc0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// // Fungsi untuk Register
// // Kita gunakan versi async / await untuk memudahkan yah
const registerEmailAndPassword = async (email, password) => {
  // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Pada aturan firebase authentication
    // Setelah user selesai registrasi, maka secara otomatis akan melakukan Sign In
    // sehingga kita bisa mengecek apakah seseorang sudah berhasil masuk atau belum

    console.log(
      "User yang teregistrasi dan berhasil login adalah",
      response.user
    );
  } catch (err) {
    console.log(err);

    // Sebenarnya di dalam err dari Firebase ini (dalam bentuk Object)
    // ada 2 property yang penting:
    // - code: error code dari firebase authentication ketika terjadi error
    // - message: error message dari firebase authentication ketika terjadi error
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

// Fungsi untuk Login
// Kita gunakan versi async / await untuk memudahkan yah
const loginWithEmailAndPassword = async (email, password) => {
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

// Fungsi untuk reset Password
// const resetPassword = async (email) => {
//   // Dokumentasi: https://firebase.google.com/docs/reference/js/auth.md#sendpasswordresetemail
//   try {
//     await sendPasswordResetEmail(auth, email);

//     console.log("Password reset sudah dikirimkan");
//   } catch (err) {
//     console.log(err);
//   }
// };

// Fungsi untuk sign out
const logout = async () => {
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
  registerEmailAndPassword,
  loginWithEmailAndPassword,
  //   resetPassword,
  logout,
};
