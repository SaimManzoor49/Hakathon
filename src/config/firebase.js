// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore/lite";
import {getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxGWiQgh5geLmmfoy6fJ5ks2Vl6LPXaDk",
  authDomain: "project-d00c3.firebaseapp.com",
  projectId: "project-d00c3",
  storageBucket: "project-d00c3.appspot.com",
  messagingSenderId: "228126823329",
  appId: "1:228126823329:web:5d0af6da8b0cd85c9871e0",
  measurementId: "G-WP724819YG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app)
const storage = getStorage(app)


export {analytics, auth, firestore, storage}