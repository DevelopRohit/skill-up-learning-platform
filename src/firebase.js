import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnfgME7jeHqwVKaA-fWKbLAjnUfRvVFrA",
  authDomain: "skillup-auth-cf603.firebaseapp.com",
  projectId: "skillup-auth-cf603",
  storageBucket: "skillup-auth-cf603.appspot.com",
  messagingSenderId: "502624366884",
  appId: "1:502624366884:web:26259524566b05094c03b1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
