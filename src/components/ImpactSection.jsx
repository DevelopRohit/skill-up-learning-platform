import { motion } from "framer-motion";
import styles from "./ImpactSeaction.module.css";

const cards = [
  {
    icon: "📈",
    title: "Career Growth",
    desc: "Gain in-demand skills that directly translate into better job roles, promotions, and salary growth.",
  },
  {
    icon: "🧠",
    title: "Hands-on Learning",
    desc: "Learn by building real-world projects, not just watching videos or reading theory.",
  },
  {
    icon: "🌍",
    title: "Industry-Relevant Skills",
    desc: "Courses designed with current industry needs, tools, and best practices in mind.",
  },
  { 
    icon: "🤝",
    title: "Mentorship & Guidance",
    desc: "Learn from experienced mentors and get guidance throughout your learning journey.",
  },
];

const ImpactSection = () => {
  return (
    <section className={styles.section}>
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>How Skill-Up Transforms Your Future</h2>
        <p>
          We don’t just teach skills — we help you build a successful and
          sustainable career.
        </p>
      </motion.div>

      {/* Cards */}
      <div className={styles.grid}>
        {cards.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
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
        <h3>Ready to level up your skills?</h3>
        <button>Explore Courses</button>
      </motion.div>
    </section>
  );
};

export default ImpactSection;
