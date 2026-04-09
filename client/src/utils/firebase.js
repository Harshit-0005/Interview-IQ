
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-43d95.firebaseapp.com",
  projectId: "fir-43d95",
  storageBucket: "fir-43d95.firebasestorage.app",
  messagingSenderId: "223609716108",
  appId: "1:223609716108:web:99a2e8f0f0f791b3a5eaa9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}