import { HOME_URL } from '@/features/layout/data';
import styles from './Navbar.module.css';

/** Navbar component. */
export default function Navbar() {
  return (
    <section className={styles.navigationContainer}>
      <nav className={styles.navigation}>
        <a href={HOME_URL}>
          <img
            className={styles.logoImage}
            src="https://storage.123fakturera.se/public/icons/diamond.png"
            alt="Diamond logo"
          />
        </a>
        <div>Menu</div>
      </nav>
    </section>
  );
}
