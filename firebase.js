// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGJJRlNEozDopi1asO_zNN19WPWLoZbpg",
  authDomain: "inventory-management-bb6d4.firebaseapp.com",
  projectId: "inventory-management-bb6d4",
  storageBucket: "inventory-management-bb6d4.appspot.com",
  messagingSenderId: "516756352606",
  appId: "1:516756352606:web:9f0983556fd0ab83cb8ecf",
  measurementId: "G-VHNN2R9TWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}