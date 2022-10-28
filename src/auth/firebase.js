// Import the functions you need from the SDKs you need
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoyFTfsawmK0I2CZCq8dUO6eFamtsh3Lw",
  authDomain: "newsportal-2f93f.firebaseapp.com",
  projectId: "newsportal-2f93f",
  storageBucket: "newsportal-2f93f.appspot.com",
  messagingSenderId: "356603629539",
  appId: "1:356603629539:web:e31f92d43e2cff775c9ad6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const regWithEmail = async (email,password) =>{
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    }
    catch (err){
        console.log(err);
        console.log("CODE",err.code);
        console.log("MSG", err.message)
    }
}

const signInWithEmail =async (email,password) =>{
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
    }
    catch (err){
        console.log(err);
        console.log("CODE",err.code);
        console.log("MSG", err.message)
    }
}

const logOut = async ()=>{
    try{
        await signOut(auth);
    }
    catch(err){
        console.log("bala",err);

    }
}

export {
    auth,
    regWithEmail,
    signInWithEmail,
    logOut,
};