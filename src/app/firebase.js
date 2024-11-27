// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMuTTuEVKpyRUZMjyrfufHHMCKWpS2pDk",
  authDomain: "cpb24weba037.firebaseapp.com",
  projectId: "cpb24weba037",
  storageBucket: "cpb24weba037.firebasestorage.app",
  messagingSenderId: "976432731746",
  appId: "1:976432731746:web:f98afe04f2ebbb3bf6a33b",
  measurementId: "G-J4M7BEN7Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);