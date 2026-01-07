import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
// import { LayoutContext } from "../context/LayoutContext";

import styles from "./HeroSection.module.css";

const HeroSection = ({ openLogin }) => {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      {/* Left */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Tech skills that go beyond <br />
          certifications,
          <span> Learn without limits.</span>
        </h1>

        <div className={styles.badges}>
          <span>🚀 Job-ready skills</span>
          <span>⚡ Next-gen tech</span>
          <span>🎯 Career-focused</span>
        </div>

        <p>
          Learn practical, industry-ready skills with expert-designed courses
          that help you grow faster and smarter.
        </p>

        <div className={styles.buttons}>
          {/* Explore Courses */}
          <button
            className={styles.primary}
            onClick={() => navigate("/courses")}
          >
            Explore Courses
          </button>

          {/* 🔥 LOGIN MODAL OPEN */}
          <button className={styles.secondary} onClick={openLogin}>
            Login with Google
          </button>
        </div>

        <small style={{color:"white"}}>Skill-Up is free forever — upgrade anytime</small>
      </motion.div>

      {/* Right */}
      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Technology learning"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
