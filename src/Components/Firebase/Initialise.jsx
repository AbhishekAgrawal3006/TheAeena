import { initializeApp } from "firebase/app";
import { getStorage,ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn4tabiMCWBZwH_utW83FT_ycYD-dfgr4",
  authDomain: "theaeena.firebaseapp.com",
  projectId: "theaeena",
  storageBucket: "theaeena.appspot.com",
  messagingSenderId: "944935959352",
  appId: "1:944935959352:web:7283e9cc9cf906e517dfcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage();
const projectFirestore = getFirestore();

export { projectStorage, projectFirestore };