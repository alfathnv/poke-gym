// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJkorsFctP8zfy5c2OqyaHwH0Lc_cZQhY",
  authDomain: "amadickatoe.firebaseapp.com",
  projectId: "amadickatoe",
  storageBucket: "amadickatoe.appspot.com",
  messagingSenderId: "318965896722",
  appId: "1:318965896722:web:a15d2fc1f78b277dad2acb",
  measurementId: "G-SLL7N0862K",
  databaseURL:
    "https://amadickatoe-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase();
// const analytics = getAnalytics(app);
