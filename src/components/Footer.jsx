import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <h2>📘 Skill-Up</h2>
          <p>
            Learn in-demand skills with expert-led courses, hands-on practice,
            and career-focused learning paths.
          </p>
        </div>

        {/* Links */}
        <div className={styles.links}>
          <h4>Explore</h4>
          <ul>
            <li>Courses</li>
            <li>Live Classes</li>
            <li>Practice</li>
            <li>Career Paths</li>
          </ul>
        </div>

        <div className={styles.links}>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Why Skill-Up</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={styles.links}>
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Skill-Up. All rights reserved.</p>
        <div className={styles.social}>
          <span>🌐</span>
          <span>🐦</span>
          <span>📘</span>
          <span>💼</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
