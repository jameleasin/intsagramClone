// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSeUXm6OM5N1A_-7qu6qVFxirlkTgnql0",
  authDomain: "instagram-clone-6dddb.firebaseapp.com",
  projectId: "instagram-clone-6dddb",
  storageBucket: "instagram-clone-6dddb.appspot.com",
  messagingSenderId: "36717239112",
  appId: "1:36717239112:web:62f741fc573d8b1b4bb17d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

