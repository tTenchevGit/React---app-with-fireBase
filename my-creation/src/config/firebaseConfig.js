import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDFR32giVl03K2coVL1dUemj1ue3_RHGao",
  authDomain: "react-earn-accounds.firebaseapp.com",
  projectId: "react-earn-accounds",
  storageBucket: "react-earn-accounds.appspot.com",
  messagingSenderId: "480860122141",
  appId: "1:480860122141:web:d4828cb93f1ec2043feaf4",
  measurementId: "G-YZ3HNCT4FT",
  databaseURL: "https://react-earn-accounds-default-rtdb.europe-west1.firebasedatabase.app"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);
const realtimeDb = getDatabase(app);

export { app, auth, realtimeDb};