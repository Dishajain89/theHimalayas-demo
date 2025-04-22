import styles from './style.module.scss';
import { GiCastle } from "react-icons/gi";
import { FaHouseChimney } from 'react-icons/fa6';
import { PiPersonSimpleHikeBold } from "react-icons/pi";
import Image from 'next/image';

export default function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statBlock}>
        <div className={`${styles.iconWrapper} ${styles.orangeGlow}`}>
        <PiPersonSimpleHikeBold />
          {/* <Image src="/assets/images/hike1.png" alt="Hike Icon" width={70} height={70} /> */}
        </div>
        <h2>70</h2>
        <h4>KILOMETRES OF SHORELINE</h4>
        <p>You can use the shores of the lakes for jogging or walking.</p>
      </div>

      <div className={styles.statBlock}>
        <div className={`${styles.iconWrapper} ${styles.blueGlow}`}>
          {/* <Image src="/assets/images/castle1.png" alt="Castle Icon" width={70} height={70} /> */}
          <GiCastle />
        </div>
        <h2>1,150</h2>
        <h4>KILOMETRES OF SIGNED TRAILS</h4>
        <p>Explore the Himalayas with family, alone or in a group, at your own pace.</p>
      </div>

      <div className={styles.statBlock}>
        <div className={`${styles.iconWrapper} ${styles.purpleGlow}`}>
        <FaHouseChimney />
          {/* <Image src="/assets/images/hut1.png" alt="Hut Icon" width={70} height={70} /> */}
        </div>
        <h2>100+</h2>
        <h4>ACCOMMODATION OPTIONS</h4>
        <p>Whether you want something unusual or comfortable, you’ll find what you need.</p>
      </div>

      <svg className={styles.connectorLine} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200">
        <path d="M 0 100 Q 250 0 500 100 T 1000 100" fill="none" stroke="#ddd" strokeWidth="2" strokeDasharray="5,5" />
      </svg>
    </section>
  );
}
