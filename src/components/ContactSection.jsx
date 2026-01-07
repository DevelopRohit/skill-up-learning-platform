import { motion } from "framer-motion";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.contact}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Get in Touch</h2>
        <p>
          Have questions or need guidance? Fill out the form and we’ll contact
          you soon.
        </p>

        <form action="https://formspree.io/f/mrezjgvn" method="POST">
          <div className={styles.inputGroup}>
            <input type="text" name="name" required />
            <label>Your Name</label>
          </div>

          <div className={styles.inputGroup}>
            <input type="email" name="email" required />
            <label>Email Address</label>
          </div>

          <div className={styles.inputGroup}>
            <textarea name="message" rows="4" required></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit">Send Message 🚀</button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
