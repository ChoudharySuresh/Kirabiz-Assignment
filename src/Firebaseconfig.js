// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3OpS4OQVvalE9E7efvzUXlV3qKYPcY24",
  authDomain: "react-firebase-email-aut-311be.firebaseapp.com",
  projectId: "react-firebase-email-aut-311be",
  storageBucket: "react-firebase-email-aut-311be.appspot.com",
  messagingSenderId: "697678916152",
  appId: "1:697678916152:web:ca09d0344c15f10df614cd",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
