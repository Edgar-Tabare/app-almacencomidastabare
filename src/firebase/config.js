// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCQ5ae_nY6nr7EQ2tZSKd5iHOQngp9fBs",
  authDomain: "tabare-f5748.firebaseapp.com",
  projectId: "tabare-f5748",
  storageBucket: "tabare-f5748.appspot.com",
  messagingSenderId: "245112273218",
  appId: "1:245112273218:web:2a5defed284b196f5e30db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);

