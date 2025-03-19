// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAltGapSrx5CZc7ID6MH4YhJ3xFvQTmnUI",
  authDomain: "bingejoy.firebaseapp.com",
  projectId: "bingejoy",
  storageBucket: "bingejoy.firebasestorage.app",
  messagingSenderId: "1013917683598",
  appId: "1:1013917683598:web:6b490199df73cbfe4e9edf",
  measurementId: "G-JK62G8NYJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export default auth;
