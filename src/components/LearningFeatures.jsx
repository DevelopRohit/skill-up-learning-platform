import { motion } from "framer-motion";
import styles from "./Lear.module.css";

const LearningFeatures = () => {
  return (
    <section className={styles.section}>
      <h1 style={{textAlign:"center", marginBottom:"40px"}}>Future Add in Features</h1>
      {/* Feature 1 */}
      <div className={styles.row}>
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://img.freepik.com/free-photo/close-up-student-online-class_23-2148888815.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Daily Live Classes"
          />
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Daily Live Classes</h3>
          <p>
            Chat with educators, ask questions, answer live polls, and get your
            doubts cleared — all while the class is going on.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primary}>Start With Free Trial</button>
            <button className={styles.secondary}>Read More</button>
          </div>
        </motion.div>
      </div>

      {/* Feature 2 */}
      <div className={`${styles.row} ${styles.reverse}`}>
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
            alt="Practice and Revise"
          />
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Practice and Revise</h3>
          <p>
            Learning isn’t just limited to classes. Practice with mock tests,
            revise with lecture notes, and download PDFs anytime for revision.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primary}>Start With Free Trial</button>
            <button className={styles.secondary}>Read More</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningFeatures;
