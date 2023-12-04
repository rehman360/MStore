import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBaZZV78gJg3F1pWKXbHdrNfz-jD84tqE",
  authDomain: "e-com-website-e921c.firebaseapp.com",
  projectId: "e-com-website-e921c",
  storageBucket: "e-com-website-e921c.appspot.com",
  messagingSenderId: "512840166423",
  appId: "1:512840166423:web:9ede1ebbca313993204052",
  measurementId: "G-BZHEERNNMG"
};

const app = initializeApp(firebaseConfig);

 export const UserAuth = getAuth(app)




 // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
// const analytics = getAnalytics(app);