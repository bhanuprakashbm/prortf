import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDAUE8FuxF6hscVoVIXmtdqM157v3H7xLw",
    authDomain: "portfolio-7ee05.firebaseapp.com",
    projectId: "portfolio-7ee05",
    storageBucket: "portfolio-7ee05.firebasestorage.app",
    messagingSenderId: "1013137501966",
    appId: "1:1013137501966:web:472d5faa9d5accf48a315f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app; 