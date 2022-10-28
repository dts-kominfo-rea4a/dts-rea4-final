// Library
import { initializeApp } from "firebase/app";
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

// firebase config
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

const logInWithEmailAndPassword = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const registerWithEmailAndPassword = async (email, password) => {
	try {
		await createUserWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const logout = () => signOut(auth);

export {
	auth,
	signInWithGoogle,
	logInWithEmailAndPassword,
	registerWithEmailAndPassword,
	logout,
};
