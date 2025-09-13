import styles from './Navbar.module.css';

/** Navbar component. */
export default function Navbar() {
  return (
    <section className={styles.navigationContainer}>
      <nav className={styles.navigation}>
        <div>Logo</div>
        <div>Menu</div>
      </nav>
    </section>
  );
}
