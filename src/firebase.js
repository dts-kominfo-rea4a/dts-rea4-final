import { initializeApp } from "firebase/app";

import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signOut,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_FIREBASE,
	authDomain: "dtskominfo-aaf6f.firebaseapp.com",
	projectId: "dtskominfo-aaf6f",
	storageBucket: "dtskominfo-aaf6f.appspot.com",
	messagingSenderId: "230896171896",
	appId: "1:230896171896:web:bf45bd4d708b4863e2268d",
	measurementId: "G-8TXVJT99VG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		console.log(user);
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};
const logInWithEmailAndPassword = async (email, password) => {};

const registerWithEmailAndPassword = async (email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		console.log(res);
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const logout = () => {
	signOut(auth);
};

export {
	auth,
	db,
	signInWithGoogle,
	logInWithEmailAndPassword,
	registerWithEmailAndPassword,
	logout,
};
