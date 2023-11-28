// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJz0qjx3aN4eT-zlolKaFPBnq1KvH4pAk",
  authDomain: "login-react-6607d.firebaseapp.com",
  projectId: "login-react-6607d",
  storageBucket: "login-react-6607d.appspot.com",
  messagingSenderId: "763623472671",
  appId: "1:763623472671:web:e716f731dd3cc35635df2a"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;