import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfZnlEz4R69HtiNBYSwyQhwS-qhNvxC0I",
  authDomain: "metflix-750cf.firebaseapp.com",
  projectId: "metflix-750cf",
  storageBucket: "metflix-750cf.appspot.com",
  messagingSenderId: "453556347182",
  appId: "1:453556347182:web:2fe57c1cf858c25c115abf",
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = app.firestore();
const auth = getAuth(firebaseApp);

export default auth;
// export default db;
