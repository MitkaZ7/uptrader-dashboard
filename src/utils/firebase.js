// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore } from "@firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGNUG3fURY51Tio4hATaaIssxkESqlXlU",
  authDomain: "dashboard-3d734.firebaseapp.com",
  projectId: "dashboard-3d734",
  storageBucket: "dashboard-3d734.appspot.com",
  messagingSenderId: "748869703340",
  appId: "1:748869703340:web:aca36391f661996b883109"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
