import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC530Ov5NY_lwKfalTeDnqyntJ09snkK2s",
  authDomain: "baatcheet-chats.firebaseapp.com",
  projectId: "baatcheet-chats",
  storageBucket: "baatcheet-chats.appspot.com",
  messagingSenderId: "520063449589",
  appId: "1:520063449589:web:1f9c089cf80c1ba99108bc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
