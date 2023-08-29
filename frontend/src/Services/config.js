
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
    authDomain: "forno-panificio.firebaseapp.com",
    projectId: "forno-panificio",
    storageBucket: "forno-panificio.appspot.com",
    messagingSenderId: "242162316819",
    appId: "1:242162316819:web:f7f24412367c8520b5f1e6"
  };


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);