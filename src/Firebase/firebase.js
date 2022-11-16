import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3ealI-i2M9vM9y_on-Ol6S2g0c6sxXLI",
  authDomain: "react-project-9fcf0.firebaseapp.com",
  projectId: "react-project-9fcf0",
  storageBucket: "react-project-9fcf0.appspot.com",
  messagingSenderId: "212043169220",
  appId: "1:212043169220:web:d8b3de037603501d93f891"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);