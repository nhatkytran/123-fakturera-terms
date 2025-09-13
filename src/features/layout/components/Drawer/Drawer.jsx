import clsx from 'clsx';

import { useOpen, useOutsideClick } from '@/shared/hooks';
import { NAVIGATION_LINKS } from '@/features/layout/data';
import BurgerIcon from '@/shared/icons/BurgerIcon';
import styles from './Drawer.module.css';

/** Drawer component. */
export default function Drawer() {
  const { isOpen, handleOpen, handleClose } = useOpen();
  const ref = useOutsideClick({ handler: handleClose, listenCapturing: false });

  /**
   * Handle drawer open.
   * @param {Event} event The click event.
   */
  const handleDrawerOpen = event => {
    if (!isOpen) {
      event.stopPropagation();
    }
    handleOpen();
  };

  return (
    <div className={styles.burgerContainer}>
      <BurgerIcon className={styles.burgerIcon} onClick={handleDrawerOpen} />
      <aside ref={ref} className={clsx(styles.drawer, { [styles.open]: isOpen })}>
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
