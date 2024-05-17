// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWvzCU9qZmHB28GJxjkwVp2fpT2yNJNt0",
  authDomain: "ads3p-login.firebaseapp.com",
  projectId: "ads3p-login",
  storageBucket: "ads3p-login.appspot.com",
  messagingSenderId: "1054056582325",
  appId: "1:1054056582325:web:e2d052596bc486e683c2fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// USE A VERSÃO MODULAR DO FIREBASE!!!
export const auth = getAuth(app);

