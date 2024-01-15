// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY2Vl_BJnKOtNE7X-188Qe8f_7nkIRRco",
  authDomain: "chat-app-65ce9.firebaseapp.com",
  projectId: "chat-app-65ce9",
  storageBucket: "chat-app-65ce9.appspot.com",
  messagingSenderId: "1052422639413",
  appId: "1:1052422639413:web:42b3ad303034c59e19867c",
  measurementId: "G-EY1KL1YVWQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();