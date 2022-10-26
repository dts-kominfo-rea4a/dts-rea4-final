import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyBG7UdyhybyYyCSIcaL2fbwCBSs_WgUxy4',
  authDomain: 'final-project-digitalent.firebaseapp.com',
  projectId: 'final-project-digitalent',
  storageBucket: 'final-project-digitalent.appspot.com',
  messagingSenderId: '796782572865',
  appId: '1:796782572865:web:ce4c0b7e266ba17cad5dc0',
};

// Initialize Firebase

const Firebase = initializeApp(firebaseConfig);

export const auth = getAuth(Firebase)

export default Firebase;