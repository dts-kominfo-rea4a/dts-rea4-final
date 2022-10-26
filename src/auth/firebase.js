// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDrWCqlNJE6ldw8D60ZUSVFRj73GxvMFjM",
  authDomain: "dts2022-agung.firebaseapp.com",
  projectId: "dts2022-agung",
  storageBucket: "dts2022-agung.appspot.com",
  messagingSenderId: "678170465841",
  appId: "1:678170465841:web:594deb36ca231057afa710",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const keluar = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err.code);
    console.log(err.message);
  }
};

const signInEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
};

const regist = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
};
export { auth, keluar, signInEmail, regist };
