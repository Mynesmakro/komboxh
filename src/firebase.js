  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";


const firebaseConfig = {

  apiKey: "AIzaSyCLt8-e8kVSCkPxKJgq4cvHz6uwqAgP0LA",
  authDomain: "babarrgars.firebaseapp.com",
  projectId: "babarrgars",
  storageBucket: "babarrgars.firebasestorage.app",
  messagingSenderId: "68149602371",
  appId: "1:68149602371:web:354d302eb2248bf19e0cf6",
  measurementId: "G-WQFG4LNCXJ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
