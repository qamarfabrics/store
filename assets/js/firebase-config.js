// =========================================================
// QAMAR FABRICS — Firebase configuration
// -----------------------------------------------------------
// 1. Go to https://console.firebase.google.com → create a
//    project (Firestore + Authentication enabled).
// 2. Project settings → General → "Your apps" → Web app →
//    copy the config object Firebase gives you and paste the
//    values below, replacing every "REPLACE_ME".
// 3. Enable Authentication providers: Email/Password + Google.
// 4. Enable Firestore in production mode, then publish the
//    rules in /firestore.rules (Firebase console → Firestore →
//    Rules, or via `firebase deploy --only firestore:rules`).
// 5. Firebase Hosting is NOT used here — this site is hosted
//    on GitHub Pages for free. Firebase is only the backend
//    (Firestore database + Authentication). That's why there's
//    no firebase.json/hosting step required.
// =========================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getFirestore,
  collection, doc, getDoc, getDocs, addDoc, setDoc, updateDoc,
  query, where, orderBy, limit, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import {
  getAuth, onAuthStateChanged, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "REPLACE_ME",
  authDomain: "REPLACE_ME.firebaseapp.com",
  projectId: "REPLACE_ME",
  storageBucket: "REPLACE_ME.appspot.com",
  messagingSenderId: "REPLACE_ME",
  appId: "REPLACE_ME"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export {
  collection, doc, getDoc, getDocs, addDoc, setDoc, updateDoc,
  query, where, orderBy, limit, serverTimestamp,
  onAuthStateChanged, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup,
  updateProfile
};
