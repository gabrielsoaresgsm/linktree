import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDQVYg_Ft8t8i26wEr_vMKiNxV-yGLjEW0",
  authDomain: "agencia-salut.firebaseapp.com",
  projectId: "agencia-salut",
  storageBucket: "agencia-salut.appspot.com",
  messagingSenderId: "60885069079",
  appId: "1:60885069079:web:bfd7143d3a0105c9f4db52",
  measurementId: "G-3M7Q39ZLMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
// const analytics = getAnalytics(app);
export { app, database };