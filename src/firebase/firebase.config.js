// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaWKToYkiiaEfEG_dKGTXpzovghAUj2YE",
  authDomain: "job-task-553fd.firebaseapp.com",
  projectId: "job-task-553fd",
  storageBucket: "job-task-553fd.appspot.com",
  messagingSenderId: "186954534410",
  appId: "1:186954534410:web:7678fbf20e660a0f5299f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth