// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoWAxlIe-ZkqH-gefiFBWR4yFV-LjR3wA",
  authDomain: "react-apps-a402f.firebaseapp.com",
  projectId: "react-apps-a402f",
  storageBucket: "react-apps-a402f.appspot.com",
  messagingSenderId: "587812506162",
  appId: "1:587812506162:web:68cf1c7674a277bfdc0a2b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp)
