
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "newiq-2c5fa.firebaseapp.com",
  projectId: "newiq-2c5fa",
  storageBucket: "newiq-2c5fa.firebasestorage.app",
  messagingSenderId:  "621988639009",
  appId:  "1:621988639009:web:b8660bc246ba9d2b6ace60"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}

