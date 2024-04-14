// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "insta-next-349a6.firebaseapp.com",
    projectId: "insta-next-349a6",
    storageBucket: "insta-next-349a6.appspot.com",
    messagingSenderId: "141021338455",
    appId: "1:141021338455:web:52f60448a70e7d1bb63c12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);