// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKAj6l7t4RGqnwe0gcpo_Yes-k4BmIcBg",
    authDomain: "architect-of-universe.firebaseapp.com",
    projectId: "architect-of-universe",
    storageBucket: "architect-of-universe.appspot.com",
    messagingSenderId: "668780140132",
    appId: "1:668780140132:web:241636ad777ee0d00df171",
    measurementId: "G-5S3MXLBV1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);