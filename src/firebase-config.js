import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlH8cTVB-HkBDwE9K3GjkSGPgZQvnCPJ4",
  authDomain: "tasktracker-e2f16.firebaseapp.com",
  projectId: "tasktracker-e2f16",
  storageBucket: "tasktracker-e2f16.appspot.com",
  messagingSenderId: "1096553840436",
  appId: "1:1096553840436:web:5750971aea142d33836f61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()