// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAF3nybDNeABLfyDewgpDdl1Y1q6mDcFUY",
  authDomain: "user-profile-creation.firebaseapp.com",
  projectId: "user-profile-creation",
  storageBucket: "user-profile-creation.firebasestorage.app",
  messagingSenderId: "299426279410",
  appId: "1:299426279410:web:395d6c5b57de3ef7f4056b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };