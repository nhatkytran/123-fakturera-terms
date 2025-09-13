import styles from './App.module.css';

/** App component. */
export default function App() {
  return (
    <main className={styles.main}>
      <div className={styles.backgroundContainer}>
        <img
          className={styles.backgroundImage}
          src="https://storage.123fakturera.se/public/wallpapers/sverige43.jpg"
          alt="Nature background"
        />
      </div>
      <section className={styles.navigationContainer}>
        <nav className={styles.navigation}>
          <div>Logo</div>
          <div>Menu</div>
        </nav>
      </section>
      <div style={{ height: '2000px' }}></div>
    </main>
  );
}
