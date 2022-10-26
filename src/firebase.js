import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfZnlEz4R69HtiNBYSwyQhwS-qhNvxC0I",
  authDomain: "metflix-750cf.firebaseapp.com",
  projectId: "metflix-750cf",
  storageBucket: "metflix-750cf.appspot.com",
  messagingSenderId: "453556347182",
  appId: "1:453556347182:web:2fe57c1cf858c25c115abf",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBGGs5ip0EdEjYgCATo0r4pgUm5pJX3GZw",
//   authDomain: "dts4a-34-final.firebaseapp.com",
//   projectId: "dts4a-34-final",
//   storageBucket: "dts4a-34-final.appspot.com",
//   messagingSenderId: "1022638246165",
//   appId: "1:1022638246165:web:c1d0d92ea8ec4fd112c11c",
//   measurementId: "G-LN8LPEQJP7",
// };

const firebaseApp = initializeApp(firebaseConfig);
// const db = app.firestore();
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
export { db };
export default auth;
