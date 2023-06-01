import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSnvVsxQFB-C6SZlNwFsi9nUSEwM_8-SM",
  authDomain: "zeev2-388305.firebaseapp.com",
  projectId: "zeev2-388305",
  storageBucket: "zeev2-388305.appspot.com",
  messagingSenderId: "21943801713",
  appId: "1:21943801713:web:9f17e3412df2c31201c8d0",
  measurementId: "G-6WWK8MYVC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export { app,auth };
