import { motion } from "framer-motion";
import styles from "./TechStackSection.module.css";

const techs = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Node.js", icon: "🟩" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "HTML5", icon: "📄" },
  { name: "CSS3", icon: "🎨" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "Cloud Basics", icon: "☁️" },
];

const TechStackSection = () => {
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
        <h2>Tools & Technologies You’ll Master</h2>
        <p>
          Learn the most in-demand programming languages and tools used by
          modern tech teams.
        </p>
      </motion.div>

      {/* Tech Grid */}
      <div className={styles.grid}>
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <span className={styles.icon}>{tech.icon}</span>
            <h4>{tech.name}</h4>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className={styles.cta}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <button>Explore Learning Paths</button>
      </motion.div>
    </section>
  );
};

export default TechStackSection;
