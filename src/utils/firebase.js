// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFAmkwpihHU6rvr23Wp0Jb0ifOLF3nGBM",
  authDomain: "netflixgpt-aa68a.firebaseapp.com",
  projectId: "netflixgpt-aa68a",
  storageBucket: "netflixgpt-aa68a.firebasestorage.app",
  messagingSenderId: "32916362058",
  appId: "1:32916362058:web:48c12abf691c76b3b3e7b3",
  measurementId: "G-3F91DW0K59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
