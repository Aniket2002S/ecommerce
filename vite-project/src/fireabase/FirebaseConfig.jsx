// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCS1kX4TchYIJ1fwI8ju3iOu_20PCMxFDE",
  authDomain: "myfirst-bed83.firebaseapp.com",
  projectId: "myfirst-bed83",
  storageBucket: "myfirst-bed83.appspot.com",
  messagingSenderId: "910064312212",
  appId: "1:910064312212:web:65b89854bf278db2cbf981"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}