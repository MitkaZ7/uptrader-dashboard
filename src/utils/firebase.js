// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGNUG3fURY51Tio4hATaaIssxkESqlXlU",
  authDomain: "dashboard-3d734.firebaseapp.com",
  projectId: "dashboard-3d734",
  storageBucket: "dashboard-3d734.appspot.com",
  messagingSenderId: "748869703340",
  appId: "1:748869703340:web:00c4a6d73f3e5f5b883109"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore =  getFirestore(app);