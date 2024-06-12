import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFdy0nZXTUpukgcH6VpDJYtc74BrwTuU0",
  authDomain: "syringe-pump-86bfb.firebaseapp.com",
  projectId: "syringe-pump-86bfb",
  storageBucket: "syringe-pump-86bfb.appspot.com",
  messagingSenderId: "115422678993",
  appId: "1:115422678993:web:9f46bc82bf51aaecf71af0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db_firestore = getFirestore(app)
export const db_auth = getAuth(app);