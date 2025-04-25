import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import styles from "./style.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.leftSection}>
          <div className={styles.logoBox}>
            <div className={styles.logo}>
              <Image
                src="/assets/images/logo himalaya.png"
                width="300"
                height="300"
                alt="logo"
              />
            </div>
            <p>
              <strong>Subscribe to our newsletter</strong> to receive tips and
              insights about travel destinations, nature, and adventure
              experiences.
            </p>
          </div>

          <form className={styles.newsletter}>
            <input type="email" placeholder="Your e-mail address..." />
            <button type="submit">
              <span>&rarr;</span>
            </button>
          </form>

          <p className={styles.privacyText}>
            You can unsubscribe at any time via the link in our emails. View our
            Privacy Policy for more info.
          </p>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.contactInfo}>
            <h2>Travel Office</h2>
            <p>Adventure Guide</p>
            <p>Email: contact@example.com</p>
            <p>Location: Mountain Basecamp, India</p>
          </div>

          <div className={styles.socialIcons}>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>

          <div className={styles.links}>
            <a href="#">Legal Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Policy</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </footer>

      <div className={styles.bottomFooter}>
        <p>© 2025 Into the Himalayas. All rights reserved.</p>
        <p>
          Developed by
          <a href="/" target="_blank" rel="noopener noreferrer">
            DishaJ
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
