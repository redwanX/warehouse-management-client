// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCntkxWblO8JKgMcfaXIRgF9q63sq5jCZU",
  authDomain: "furniture-house-d2811.firebaseapp.com",
  projectId: "furniture-house-d2811",
  storageBucket: "furniture-house-d2811.appspot.com",
  messagingSenderId: "482772483059",
  appId: "1:482772483059:web:749b50939cc0572bd8f086"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth