"use client";

import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";

const places = [
  {
    name: "Nainital",
    image: "/assets/images/nainital.jpg",
    description: "Peaceful lakes and pine forests in a charming hill town.",
    link:"https://en.wikipedia.org/wiki/Nainital"
  },
  {
    name: "Auli",
    image: "/assets/images/auli.jpg",
    description: "Snowy slopes and stunning Himalayan views — ski paradise.",
    link: "https://en.wikipedia.org/wiki/Auli,_India"
  },
  {
    name: "Binsar",
    image: "/assets/images/binsar.jpg",
    description: "Quiet forest retreat known for nature, wildlife, and stars.",
    link:"https://en.wikipedia.org/wiki/Binsar_Wildlife_Sanctuary"
  },
  {
    name: "Rishikesh",
    image: "/assets/images/rishikesh.jpg",
    description: "Yoga capital of the world on the banks of the sacred Ganga.",
    link:"https://en.wikipedia.org/wiki/Rishikesh",
  },
  {
    name: "Mussoorie",
    image: "/assets/images/mussoorie.jpg",
    description: "Charming hill station with colonial vibes and scenic views.",
    link:"https://en.wikipedia.org/wiki/Mussoorie",
  },
];

export default function HeroScrollSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = document.querySelector(`.${styles.heroSection}`);
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
  
      const relativeScroll = scrollTop - sectionTop;
      const scrollRatio = relativeScroll / sectionHeight;
  
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
  
        const delay = i * 0.1;
        const progress = (scrollRatio - delay) / (1 - delay);
        const clamped = Math.min(Math.max(progress, 0), 1);
  
        const x = 100 - clamped * 150;
        const y = 100 - clamped * 150;
  
        card.style.transform = `translate(${x}vw, ${y}vh) translate(-50%, -50%)`;
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToFirstCard = () => {
    const card = cardsRef.current[0];
    if (!card) return;
  
    // Force reflow to make sure animations/styles are applied
    card.getBoundingClientRect();
  
    // Use setTimeout to ensure animation transform updates are applied
    setTimeout(() => {
      const rect = card.getBoundingClientRect();
      const scrollTop =
        window.scrollY + rect.top - window.innerHeight / 2 + card.offsetHeight / 2;
  
      window.scrollTo({
        top: window.innerHeight * 1,
        behavior: "smooth",
      });
    }, 10); // Small delay to allow layout update
  };
  
  

  return (
    <section className={styles.heroSection}>
      <video className={styles.videoBg} autoPlay muted loop playsInline>
        <source src="/assets/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>

      <div className={styles.heading}>
        <p>Explore the untouched beauty of Uttarakhand</p>
        <h1>
          Into - <span>the Himalayas</span>
        </h1>
        <div  className={styles.btnWrapper} onClick={scrollToFirstCard}>
          <span className={styles.scrollBtn} >
            <FaArrowDown className={styles.arrowIcon} />
            Explore As You Wish
          </span>
        </div>
      </div>

      <div className={styles.cardsWrapper}>
        {places.map((place, i) => (
          <div
            key={i}
            className={styles.card}
            ref={(el) => (cardsRef.current[i] = el)}
            style={{
              top: `calc(90% + ${i * 13}vh)`,
              left: `calc(10% + ${i * 10}vw)`,
              zIndex: places.length - i, // highest on top
            }}
          >
            <Link href={place.link} target="_blank" > 
            <img src={place.image} alt={place.name} />
            </Link>
            <div className={styles.content}>
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
