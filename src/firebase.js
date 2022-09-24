// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUrIa8a5yNoEawDJv2sKEgb1NhZxQ0b1Y",
  authDomain: "cash-driver-8e4bd.firebaseapp.com",
  projectId: "cash-driver-8e4bd",
  storageBucket: "cash-driver-8e4bd.appspot.com",
  messagingSenderId: "272580846123",
  appId: "1:272580846123:web:8896f12638b4331a29806e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}