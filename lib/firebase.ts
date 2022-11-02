// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQRY5gLjA-QCURwchzabjHT0ghmLy1M1Q",
  authDomain: "netflix-clone-20756.firebaseapp.com",
  projectId: "netflix-clone-20756",
  storageBucket: "netflix-clone-20756.appspot.com",
  messagingSenderId: "105732970479",
  appId: "1:105732970479:web:ecdece9be9512e1ee5c81a",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
console.log({ auth });

export default app;
export { auth, db };
