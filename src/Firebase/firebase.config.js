// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ9c6TONzcMcVsfMF6PXkf_sJWZAcZI9U",
  authDomain: "warmpaws-af92d.firebaseapp.com",
  projectId: "warmpaws-af92d",
  storageBucket: "warmpaws-af92d.firebasestorage.app",
  messagingSenderId: "349686737045",
  appId: "1:349686737045:web:2ee140e5ddd17914e8d39c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
