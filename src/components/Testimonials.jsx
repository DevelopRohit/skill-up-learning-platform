import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Aman Verma",
    role: "Frontend Developer",
    company: "Startup",
    feedback:
      "Skill-Up helped me transition from a beginner to a confident frontend developer. The hands-on projects made a huge difference.",
  },
  {
    name: "Neha Sharma",
    role: "Data Analyst",
    company: "MNC",
    feedback:
      "The Data Science course was extremely practical and well-structured. I finally understood machine learning concepts clearly.",
  },
  {
    name: "Rohit Patel",
    role: "UI/UX Designer",
    company: "Freelancer",
    feedback:
      "The UI/UX program helped me build a strong portfolio. I started getting freelance clients within months.",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.section}>
      {/* Heading */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>What Our Learners Say</h2>
        <p>
          Thousands of learners have transformed their careers with Skill-Up.
        </p>
      </motion.div>

      {/* Cards */}
      <div className={styles.grid}>
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <p className={styles.text}>"{item.feedback}"</p>

            <div className={styles.user}>
              <div className={styles.avatar}>{item.name.charAt(0)}</div>
              <div>
                <h4>{item.name}</h4>
                <span>
                  {item.role} · {item.company}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
