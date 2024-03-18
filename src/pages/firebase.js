// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChbf-yCH7cIIhBBgW_IiRRqehQTF8rHOk",
  authDomain: "aquasense-fd4c9.firebaseapp.com",
  databaseURL: "https://aquasense-fd4c9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aquasense-fd4c9",
  storageBucket: "aquasense-fd4c9.appspot.com",
  messagingSenderId: "219267851252",
  appId: "1:219267851252:web:270821a0b59d693e5a8fa1",
  measurementId: "G-JXG33G6JXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { firebaseConfig, database }; // Export both firebaseConfig and database instances