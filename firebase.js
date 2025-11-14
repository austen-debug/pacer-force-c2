// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqCE7KQMcMyYxbcwrRhWUO2ZFX1pNJVPI",
  authDomain: "pacer-forge-c2.firebaseapp.com",
  projectId: "pacer-forge-c2",
  storageBucket: "pacer-forge-c2.firebasestorage.app",
  messagingSenderId: "191357144202",
  appId: "1:191357144202:web:24d82f826a60c981937173",
  measurementId: "G-1WGHMMM8NK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
