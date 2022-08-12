// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvFRqYdWTuvAZwhTKcgG6PnNR6hT0pQLc",
  authDomain: "blog-edc20.firebaseapp.com",
  projectId: "blog-edc20",
  storageBucket: "blog-edc20.appspot.com",
  messagingSenderId: "1062619991654",
  appId: "1:1062619991654:web:d3e7c8efad915d05ca27a7",
  measurementId: "G-VTPF6P19XC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
