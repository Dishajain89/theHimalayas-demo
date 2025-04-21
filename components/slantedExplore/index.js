import styles from './style.module.scss';

export default function SlantedExplore() {
  return (
    <section className={styles.section}>
      <div className={styles.contentBox}>
        <h2>
          Explore Hidden Trails<br /> of the Himalayan<br /> Uttarakhand
        </h2>
        <p>
          Discover serene lakes, sacred temples, and majestic peaks.<br />
          Embark on curated challenges to uncover the soul of Uttarakhand<br />
          — from the mystic aura of Kedarnath to the lush valleys of Nainital.
        </p>

        <button className={styles.ctaButton}>
          <span className={styles.plusIcon}>+</span>
          START EXPLORING
        </button>
      </div>
    </section>
  );
}
