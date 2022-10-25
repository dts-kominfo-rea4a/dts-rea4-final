// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1va6GVVsXgIgIb_y7rDJCbPh9ZBEVYwA",
  authDomain: "final-project-dts-91161.firebaseapp.com",
  projectId: "final-project-dts-91161",
  storageBucket: "final-project-dts-91161.appspot.com",
  messagingSenderId: "439675805302",
  appId: "1:439675805302:web:ba6e506d009f27689c4957",
  measurementId: "G-66ZXFTH0Y4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// init firebase Auth
const auth = getAuth(app);

//function for registration
const registration = async (email, password) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredentials.user, "Registration Success");
  } catch (err) {
    console.log(err);

    console.log(err.code, "ERR CODE");
    console.log(err.message, "ERR MESSAGE");
  }
};

// function for Login
const login = async (email, password) => {
  try {
    const userCredendtials1 = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredendtials1.user, "Login Success");
  } catch (err) {
    console.log(err);

    console.log(err.code, "ERR CODE");
    console.log(err.message, "ERR MESSAGE");
  }
};

//function for LogOut
const logOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {}
};

// export function

export { auth, registration, login, logOut };
