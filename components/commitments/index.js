import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

function Commitments() {
  return (
    <div className={styles.commitments}>
      <div className={styles.leftSection}>
        <div className={styles.img1}>
          <Image
            src="/assets/images/commitment1.jpg"
            width="500"
            height="600"
            alt="team-img"
          />
        </div>
        <div className={styles.img2}>
          <Image
            src="/assets/images/commitment2.jpg"
            width="200"
            height="300"
            alt="team-img"
          />
        </div>
      </div>
      <div className={styles.rightSection}>
        <p>
          We are committed to preserving the essence of Uttarakhand — its
          tranquil nature, sacred traditions, and vibrant communities. Our
          mission is to inspire conscious exploration, connect travelers with
          authentic experiences, and ensure that every step you take leaves a
          positive impact on the land and its people.
        </p>

        <div className={styles.btnWrapper}>
          <span className={styles.scrollBtn}>
          <FaPlus className={styles.arrowIcon} />
            Read Our Commitments
          </span>
        </div>
      </div>
    </div>
  );
}

export default Commitments;
