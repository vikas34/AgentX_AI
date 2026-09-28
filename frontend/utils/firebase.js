import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "agentx-ai-d25ef.firebaseapp.com",
  projectId: "agentx-ai-d25ef",
  storageBucket: "agentx-ai-d25ef.firebasestorage.app",
  messagingSenderId: "53008999965",
  appId: "1:53008999965:web:03e1c08390851cc02748f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth
export const auth = getAuth(app);

// Google Provider
export const googleProvider = new GoogleAuthProvider();

//  show Google account selection
googleProvider.setCustomParameters({
  prompt: "select_account",
});
