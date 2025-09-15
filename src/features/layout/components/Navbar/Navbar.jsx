import clsx from 'clsx';

import { useLanguageTranslations } from '@/shared/hooks';
import { LOGIN_URL, getNavigationLinks } from '@/features/layout/data';
import Drawer from '@/features/layout/components/Drawer';
import LanguageSelector from '@/features/layout/components/LanguageSelector';
import styles from './Navbar.module.css';

/** Navbar component. */
export default function Navbar() {
  const {
    translations: { navigation },
  } = useLanguageTranslations();
  const navigationLinks = getNavigationLinks(navigation);

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
            {navigationLinks.map((link, index) => (
              <li key={link.label}>
                <a
                  className={clsx(
                    styles.navigationLink,
                    index === navigationLinks.length - 1 && styles.navigationLinkLast,
                  )}
                  href={link.href}
                >
                  {link.label}
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
