import CloseAndGoBackButton from '@/shared/components/CloseAndGoBackButton';
import styles from './Header.module.css';

/** Header component. */
export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Terms</h1>
      <CloseAndGoBackButton />
    </header>
  );
}
