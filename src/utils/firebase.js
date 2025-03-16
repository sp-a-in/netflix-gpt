// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYS0yfjOoXhahgm0rmdCdoau4NMlTKjm8",
  authDomain: "sparsh-netflix-gpt.firebaseapp.com",
  projectId: "sparsh-netflix-gpt",
  storageBucket: "sparsh-netflix-gpt.firebasestorage.app",
  messagingSenderId: "1094003747370",
  appId: "1:1094003747370:web:e49c24c9e6091f5383f153",
  measurementId: "G-JGKSQHTD7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export default auth;
