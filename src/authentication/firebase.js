import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGavO0FCa1koyLJlPaml55t67Qhe-lVx8",
  authDomain: "rea4a-38-final.firebaseapp.com",
  projectId: "rea4a-38-final",
  storageBucket: "rea4a-38-final.appspot.com",
  messagingSenderId: "143456225189",
  appId: "1:143456225189:web:8e6524fc33ac8a1eeb8a4c",
  measurementId: "G-0TD2ZLZPK6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerDenganEmailDanPassword = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);

    console.log("User yang teregistrasi dan berhasil login adalah", response.user);
  } catch (err) {
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};
const loginDenganEmailDanPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    console.log("User yang berhasil login adalah", userCredential.user);
  } catch (err) {
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);

    console.log("Password reset sudah dikirimkan");
  } catch (err) {
    console.log(err);
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
    registerDenganEmailDanPassword,
    loginDenganEmailDanPassword,
    resetPassword,
    logout,
}
