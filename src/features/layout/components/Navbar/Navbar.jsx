import clsx from 'clsx';

import { LOGIN_URL, NAVIGATION_LINKS } from '@/features/layout/data';
import Drawer from '@/features/layout/components/Drawer';
import LanguageSelector from '@/features/layout/components/LanguageSelector';
import styles from './Navbar.module.css';

/** Navbar component. */
export default function Navbar() {
  return (
    <section className={styles.navigationContainer}>
      <nav className={styles.navigation}>
        <a className={styles.logo} href={LOGIN_URL}>
          <img
            className={styles.logoImage}
            src="https://storage.123fakturera.se/public/icons/diamond.png"
            alt="Diamond logo"
          />
        </a>
        <Drawer />
        <div className={styles.actionsContainer}>
          <ul className={styles.navigationList}>
            {NAVIGATION_LINKS.map((link, index) => (
              <li key={link.label}>
                <a
                  className={clsx(
                    styles.navigationLink,
                    index === NAVIGATION_LINKS.length - 1 && styles.navigationLinkLast,
                  )}
                  href={link.href}
                >
                  <p>{link.label}</p>
                </a>
              </li>
            ))}
          </ul>
          {/* Based on the current working state of the real page, we call LanguageSelector 2 times to replicate the behavior. */}
          <LanguageSelector isSmallDesktop />
          <LanguageSelector isSmallDesktop={false} />
        </div>
      </nav>
    </section>
  );
}
