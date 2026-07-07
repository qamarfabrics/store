// =========================================================
// QAMAR FABRICS — auth helpers (Firebase Authentication)
// =========================================================
import {
  auth, onAuthStateChanged, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup,
  updateProfile
} from "./firebase-config.js";
import { toast } from "./components.js";

export function watchAuth(cb) {
  return onAuthStateChanged(auth, cb);
}

export async function registerWithEmail(name, email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  if (name) await updateProfile(cred.user, { displayName: name });
  return cred.user;
}

export async function loginWithEmail(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const cred = await signInWithPopup(auth, provider);
  return cred.user;
}

export async function logout() {
  await signOut(auth);
  toast("Signed out");
}

export function friendlyAuthError(err) {
  const map = {
    "auth/email-already-in-use": "That email already has an account — try logging in instead.",
    "auth/invalid-email": "That email address doesn't look right.",
    "auth/weak-password": "Use at least 6 characters for your password.",
    "auth/user-not-found": "No account found with that email.",
    "auth/wrong-password": "That password doesn't match.",
    "auth/invalid-credential": "Email or password is incorrect.",
    "auth/popup-closed-by-user": "Google sign-in was closed before finishing."
  };
  return map[err.code] || "Something went wrong. Please try again.";
}
