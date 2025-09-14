import CloseAndGoBackButton from '@/shared/components/CloseAndGoBackButton';
import styles from './Footer.module.css';

/** Footer component. */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <CloseAndGoBackButton />
    </footer>
  );
}
