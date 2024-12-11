// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsXRD5RnFCos_Gnks54QMcbjoCinrO_BI",
  authDomain: "dragon-news-project2.firebaseapp.com",
  projectId: "dragon-news-project2",
  storageBucket: "dragon-news-project2.firebasestorage.app",
  messagingSenderId: "307744945190",
  appId: "1:307744945190:web:1dfd974a220b616d12a2e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app);