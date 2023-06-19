import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXt4kwTWG0t5fRE8eR-ml2YjfrQxhyuZw",
  authDomain: "gupshup-chatapp.firebaseapp.com",
  projectId: "gupshup-chatapp",
  storageBucket: "gupshup-chatapp.appspot.com",
  messagingSenderId: "1022054976441",
  appId: "1:1022054976441:web:c8169acd1a09dceb900468"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();