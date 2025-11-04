// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwb5CANZKWxpChmQoluA9LFXPeSreM6aE",
  authDomain: "prepwise-9a7b5.firebaseapp.com",
  projectId: "prepwise-9a7b5",
  storageBucket: "prepwise-9a7b5.firebasestorage.app",
  messagingSenderId: "798193253184",
  appId: "1:798193253184:web:93bdc3738f990075b918a5",
  measurementId: "G-KY15HQN3HQ"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);