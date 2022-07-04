// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAuu94OHvaiujlkmDwp1GfsdB4i36ARmLQ",
  authDomain: "budget-app-9ebac.firebaseapp.com",
  projectId: "budget-app-9ebac",
  storageBucket: "budget-app-9ebac.appspot.com",
  messagingSenderId: "449353748207",
  appId: "1:449353748207:web:b260cd38537e02592cd51a",
  measurementId: "G-072J4H4ZYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {auth, db };