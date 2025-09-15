import { useLanguageTranslations } from '@/shared/hooks';
import styles from './CloseAndGoBackButton.module.css';

/** Main button component. */
export default function CloseAndGoBackButton() {
  const {
    translations: { terms },
  } = useLanguageTranslations();

  /** Handles the go back action. */
  const handleGoBack = () => {
    window.close('', '_self', '');
    history.back();
  };

  return (
    <button className={styles.mainButton} onClick={handleGoBack}>
      {terms.labels.close}
    </button>
  );
}
