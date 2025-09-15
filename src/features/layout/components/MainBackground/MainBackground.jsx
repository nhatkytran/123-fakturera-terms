import styles from './MainBackground.module.css';

/** MainBackground component. */
export default function MainBackground() {
  return (
    <div className={styles.backgroundContainer}>
      <img
        className={styles.backgroundImage}
        src="https://storage.123fakturera.se/public/wallpapers/sverige43.jpg"
        alt=""
      />
    </div>
  );
}
