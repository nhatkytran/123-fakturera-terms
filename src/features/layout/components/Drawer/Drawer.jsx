import clsx from 'clsx';

import { useOpen } from '@/shared/hooks';
import { NAVIGATION_LINKS } from '@/features/layout/data';
import BurgerIcon from '@/shared/icons/BurgerIcon';
import styles from './Drawer.module.css';

/** Drawer component. */
export default function Drawer() {
  const { isOpen, handleOpen } = useOpen();

  return (
    <div className={styles.burgerContainer}>
      <BurgerIcon className={styles.burgerIcon} onClick={handleOpen} />
      <aside className={clsx(styles.drawer, { [styles.open]: isOpen })}>
        <ul>
          {NAVIGATION_LINKS.map(link => (
            <li key={link.label}>
              <a href={link.href} className={styles.navigationLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
