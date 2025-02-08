import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC2uovyKty7rCJi3CR_2D7CE4TTKmnh2x8",
    authDomain: "personal-site-7f325.firebaseapp.com",
    projectId: "personal-site-7f325",
    storageBucket: "personal-site-7f325.firebasestorage.app",
    messagingSenderId: "242692427711",
    appId: "1:242692427711:web:0eae5960451b6c21a41b0a",
    measurementId: "G-PP6T0F4QNK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Configure email link authentication
const actionCodeSettings = {
    url: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/login'
        : 'https://yoursite.com/login', // Update with your production URL
    handleCodeInApp: true
};

export { db, auth, actionCodeSettings }; 