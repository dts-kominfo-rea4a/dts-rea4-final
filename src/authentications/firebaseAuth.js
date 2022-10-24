import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDl1vXT7swFNrpg0s_VAGMV5OrOaBjzbks",
  authDomain: "belajar-firebase-17240.firebaseapp.com",
  projectId: "belajar-firebase-17240",
  storageBucket: "belajar-firebase-17240.appspot.com",
  messagingSenderId: "633402236466",
  appId: "1:633402236466:web:7d9d340c8b7524d11e262b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signUpWithPassword = async (email, password) => {
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

const signInWithPassword = async (email, password) => {
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

const signOutAll = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export { auth, signUpWithPassword, signInWithPassword, signOutAll };
