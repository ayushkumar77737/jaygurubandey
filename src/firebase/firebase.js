// src/firebase/firebase.js

import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// 🔐 Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuOCJo2kmUaTbnRopnoGf0tcege0z1sf0",
  authDomain: "jai-gurubande.firebaseapp.com",
  projectId: "jai-gurubande",
  storageBucket: "jai-gurubande.firebasestorage.app",
  messagingSenderId: "729729280095",
  appId: "1:729729280095:web:b1a89720b6488182fc93ea",
  measurementId: "G-31C7TQ65N5"
};


// 🚀 Initialize Firebase
const app=initializeApp(firebaseConfig);

// 🔑 Export Auth & Firestore
export const auth=getAuth(app);
export const db=getFirestore(app);
