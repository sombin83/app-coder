import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKGUDUr0VodB2bFc75czMR6UdUcqF9UJc",
  authDomain: "app-coder-causa.firebaseapp.com",
  projectId: "app-coder-causa",
  storageBucket: "app-coder-causa.appspot.com",
  messagingSenderId: "1051700876103",
  appId: "1:1051700876103:web:93331e8ed44961aaebf262"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);