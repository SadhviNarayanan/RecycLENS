// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKSLMNHIvbl1LWKfeYOFsJ74wOroRXa9k",
    authDomain: "sustainability2.firebaseapp.com",
    projectId: "sustainability2",
    storageBucket: "sustainability2.firebasestorage.app",
    messagingSenderId: "616699096030",
    appId: "1:616699096030:web:bebe819564048a9a4f8b4f",
    measurementId: "G-75PJ095NZS"
  };
 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
