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
  await createUserWithEmailAndPassword(auth, email, password);
};

const signInWithPassword = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

const signOutAll = async () => {
  await signOut(auth);
};

export { auth, signUpWithPassword, signInWithPassword, signOutAll };
