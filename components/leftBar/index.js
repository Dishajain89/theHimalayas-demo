"use client";

import Image from "next/image";
import styles from "./style.module.scss";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function LeftBar() {
  return (
    <div className={styles.leftBar}>
      <div className={styles.logo}>
      <Image src="/assets/images/logo himalaya.png" width="200" height="200" alt="logo" />
      </div>
      <div className={styles.socials}>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaYoutube /></a>
      </div>
    </div>
  );
}
