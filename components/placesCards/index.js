"use client";

import styles from "./style.module.scss";
import { motion } from "framer-motion";

const places = [
  {
    name: "Nainital",
    image: "/images/nainital.jpg",
    description: "Famous for its peaceful lake, forested hills and colonial charm.",
  },
  {
    name: "Auli",
    image: "/images/auli.jpg",
    description: "A beautiful hill station known for skiing and panoramic Himalayan views.",
  },
  {
    name: "Binsar",
    image: "/images/binsar.jpg",
    description: "Scenic forested hill town known for nature, wildlife, and peaceful stays.",
  },
];

export default function PlacesCards() {
  return (
    <section id="places" className={styles.section}>
      <h2 className={styles.heading}>Featured Places</h2>
      <div className={styles.grid}>
        {places.map((place, index) => (
          <motion.div
            key={place.name}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={place.image} alt={place.name} />
            <div className={styles.content}>
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
