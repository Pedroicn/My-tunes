import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const API_KEY = process.env.REACT_APP_API_KEY;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "my-tunes-f6cda.firebaseapp.com",
  projectId: "my-tunes-f6cda",
  storageBucket: "my-tunes-f6cda.appspot.com",
  messagingSenderId: "499218678643",
  appId: "1:499218678643:web:2160ca0c941b7d6a853b06"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;