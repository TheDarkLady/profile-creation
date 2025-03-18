// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "user-profile-creation.firebaseapp.com",
  projectId: "user-profile-creation",
  storageBucket: "user-profile-creation.firebasestorage.app",
  messagingSenderId: "299426279410",
  appId: import.meta.env.VITE_API_ID
};
console.log("API KEY : ", import.meta.env.VITE_API_KEY);


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export { auth, db };