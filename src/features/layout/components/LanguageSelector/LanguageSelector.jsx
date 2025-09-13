import styles from './LanguageSelector.module.css';

/** Language selector component. */
export default function LanguageSelector() {
  return (
    <div className={styles.languageContainer}>
      <span className={styles.language}>English</span>
      <img
        className={styles.languageIcon}
        src="https://storage.123fakturere.no/public/flags/GB.png"
        alt="GB flag icon"
      />
    </div>
  );
}
