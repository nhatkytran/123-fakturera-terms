import BurgerIcon from '@/shared/icons/BurgerIcon';
import styles from './Drawer.module.css';

/** Drawer component. */
export default function Drawer() {
  return (
    <div className={styles.burgerContainer}>
      <BurgerIcon />
    </div>
  );
}
