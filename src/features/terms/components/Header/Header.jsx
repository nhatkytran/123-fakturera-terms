import { useLanguageTranslations } from '@/shared/hooks';
import CloseAndGoBackButton from '@/shared/components/CloseAndGoBackButton';
import styles from './Header.module.css';

/** Header component. */
export default function Header() {
  const {
    translations: { terms },
  } = useLanguageTranslations();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{terms.labels.terms}</h1>
      <CloseAndGoBackButton />
    </header>
  );
}
