// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0wht3-9V20iKZAufIEnxyrVoAaV3TxXk",
  authDomain: "reign-ea368.firebaseapp.com",
  projectId: "reign-ea368",
  storageBucket: "reign-ea368.firebasestorage.app",
  messagingSenderId: "897364911825",
  appId: "1:897364911825:web:b3172cea98c5be797907f0",
  measurementId: "G-4E8ENQDDHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);