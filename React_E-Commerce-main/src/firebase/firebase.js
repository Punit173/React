import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmGx2zjdWw6O3tlzP7bdTqk9LCkHzFb2E",
  authDomain: "login-page-7ccd8.firebaseapp.com",
  databaseURL: "https://login-page-7ccd8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "login-page-7ccd8",
  storageBucket: "login-page-7ccd8.appspot.com",
  messagingSenderId: "671910252727",
  appId: "1:671910252727:web:2b80704f7e4066544cbd32",
  measurementId: "G-SHH5MHKB2W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);