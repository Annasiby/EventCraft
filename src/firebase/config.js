// Firebase configuration
// Replace these values with your actual Firebase config after setting up Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA9wHg6cH27Eg8ri3nq3CD45ClZp-tYGCg",
  authDomain: "eventcraft-b1dbf.firebaseapp.com",
  projectId: "eventcraft-b1dbf",
  storageBucket: "eventcraft-b1dbf.firebasestorage.app",
  messagingSenderId: "360761385292",
  appId: "1:360761385292:web:5759d58bc82d13b262afe9",
  measurementId: "G-7PE43QJK6D"
};

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;