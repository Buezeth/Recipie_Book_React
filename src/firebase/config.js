// import firebase from "firebase/compat/app";
// import 'firebase/firestore'

// const firebaseConfig = {
//     apiKey: "AIzaSyAqt_YQwX3_rFEwKvYc2I32RT42EwjP1J4",
//     authDomain: "recipie-book-6978e.firebaseapp.com",
//     projectId: "recipie-book-6978e",
//     storageBucket: "recipie-book-6978e.appspot.com",
//     messagingSenderId: "525287150099",
//     appId: "1:525287150099:web:4872f8760ce759aef6e5e6"
//   };

//   //initialise firebase
//   firebase.initializeApp(firebaseConfig)

//   //initialize firestore
//   const projectFireStore = firebase.firestore(firebaseConfig)

//   export {projectFireStore}

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqt_YQwX3_rFEwKvYc2I32RT42EwjP1J4",
  authDomain: "recipie-book-6978e.firebaseapp.com",
  projectId: "recipie-book-6978e",
  storageBucket: "recipie-book-6978e.appspot.com",
  messagingSenderId: "525287150099",
  appId: "1:525287150099:web:4872f8760ce759aef6e5e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const projectFireStore = getFirestore(app)