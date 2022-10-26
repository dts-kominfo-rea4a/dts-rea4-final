// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    GoogleAuthProvider, 
    signInWithEmailAndPassword,
    signInWithPopup, 
    updateProfile,
    signOut } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2H8oLoVn6pX1_OJAANltpIt0OHF4zlXE",
    authDomain: "dtsfirebase.firebaseapp.com",
    projectId: "dtsfirebase",
    storageBucket: "dtsfirebase.appspot.com",
    messagingSenderId: "478488433208",
    appId: "1:478488433208:web:0434b1d262f7acf93dcccd"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("profile");
googleProvider.addScope("email");
// googleProvider.addScope("https://www.googleapis.com/auth/contacts.readonly")

const signInWithGoogle = async () => {
    try{
        const userCredential = await signInWithPopup(auth, googleProvider);
        console.log(userCredential);
    } catch (err){
        console.log(err);
    }
};

const register = async (email, password) => {
    

    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
    }catch (err){
        console.log(err);
    }
}

const sigInWithEmail = async (email,password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        console.log(userCredential);
    }catch(err){
        console.log(err);
    }
}

const signOutFromEverywhere = async () => {
    try{
        await signOut(auth);
    }catch (err){
        console.log(err);
    }
}

// save list id combine with user display name
const saveIdListMovies = async (listId) => {
    try{
        const update = await updateProfile(auth.currentUser,{displayName: listId});
        console.log(update);
    } catch(err){
        console.log(err);
    }
}

export { auth, signInWithGoogle, signOutFromEverywhere, register, sigInWithEmail, saveIdListMovies };
