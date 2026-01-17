// src/components/AuthModal.jsx
import { FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import styles from "./AuthModal.module.css";

const provider = new GoogleAuthProvider();

const AuthModal = ({ close }) => {
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("LOGIN SUCCESS:", result.user);
      close(); // ✅ login ke baad modal close
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={close}>
          <FaTimes />
        </button>

        <h2>Sign in to Skill-Up</h2>

        <button className={styles.googleBtn} onClick={googleLogin}>
          <FcGoogle /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default AuthModal;