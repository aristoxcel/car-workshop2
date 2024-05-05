
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5W79zQAvzBHHm_dQQzpRSfPXRm5PilyM",
  authDomain: "car-workshop-ltd.firebaseapp.com",
  projectId: "car-workshop-ltd",
  storageBucket: "car-workshop-ltd.appspot.com",
  messagingSenderId: "316378405969",
  appId: "1:316378405969:web:409527d79911d1e146ec70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;