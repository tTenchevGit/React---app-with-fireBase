// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFR32giVl03K2coVL1dUemj1ue3_RHGao",
  authDomain: "react-earn-accounds.firebaseapp.com",
  projectId: "react-earn-accounds",
  storageBucket: "react-earn-accounds.appspot.com",
  messagingSenderId: "480860122141",
  appId: "1:480860122141:web:d4828cb93f1ec2043feaf4",
  measurementId: "G-YZ3HNCT4FT"
};

// Initialize Firebaseconst app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };