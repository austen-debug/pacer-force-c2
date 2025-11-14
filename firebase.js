// Firebase v8 CDN initialization (required for GitHub Pages)

var firebaseConfig = {
  apiKey: "AIzaSyBqCE7KQMcMyYxbcwrRhWUO2ZFX1pNJVPI",
  authDomain: "pacer-forge-c2.firebaseapp.com",
  projectId: "pacer-forge-c2",
  storageBucket: "pacer-forge-c2.firebasestorage.app",
  messagingSenderId: "191357144202",
  appId: "1:191357144202:web:24d82f826a60c981937173",
  measurementId: "G-1WGHMMM8NK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
