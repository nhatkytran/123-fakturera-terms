import styles from './CloseAndGoBackButton.module.css';

/** Main button component. */
export default function CloseAndGoBackButton() {
  /** Handles the go back action. */
  const handleGoBack = () => {
    window.close('', '_self', '');
    history.back();
  };

  return (
    <button className={styles.mainButton} onClick={handleGoBack}>
      Close and Go Back
    </button>
  );
}
