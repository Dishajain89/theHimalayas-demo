"use client";

import styles from "./style.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = ["Places", "Events", "Gallery", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        {!isMobile && !scrolled ? (
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <div className={styles.hamMenu}>
            <div className={styles.logo}>Into<br />the<br />Himalayas</div>

              <button
                className={styles.menuButton}
                onClick={() => setIsMenuOpen(true)}
              >
                <FaBars />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Slide-in Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.drawer}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes />
            </button>
            <ul>
              {navItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
