import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNanqWOS9QKPTNNGHV1BOQqKznlhH0LFo",
  authDomain: "nextfire-90e2b.firebaseapp.com",
  projectId: "nextfire-90e2b",
  storageBucket: "nextfire-90e2b.appspot.com",
  messagingSenderId: "186196578324",
  appId: "1:186196578324:web:5a2f8f6c666e69a9f2d701",
  measurementId: "G-SRZ14798J1"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
