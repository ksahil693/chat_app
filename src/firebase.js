
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyC2wv0qdgRN60EjbCOi8DHtYni7Cl0Oh5U",
  authDomain: "chat-27132.firebaseapp.com",
  projectId: "chat-27132",
  storageBucket: "chat-27132.appspot.com",
  messagingSenderId: "429872712947",
  appId: "1:429872712947:web:9a81911502c7b6377e3b86"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()


