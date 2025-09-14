import { useState } from 'react';
import clsx from 'clsx';

import { useOpen, useOutsideClick } from '@/shared/hooks';
import { LANGUAGES, SVENSKA } from '@/features/layout/data';
import styles from './LanguageSelector.module.css';

/**
 * Language selector component.
 * @param {Object} props The props object.
 * @param {boolean} props.isSmallDesktop Whether it is small desktop.
 */
export default function LanguageSelector({ isSmallDesktop = true }) {
  const [language, setLanguage] = useState(LANGUAGES.find(lang => lang.language === SVENSKA));
  const { isOpen, handleOpen, handleClose } = useOpen();
  const ref = useOutsideClick({ handler: handleClose, listenCapturing: false });

  /**
   * Handle language menu open.
   * @param {Event} event The click event.
   */
  const handleLanguageMenuOpen = event => {
    if (!isOpen) {
      event.stopPropagation();
    }
    handleOpen();
  };

  /**
   * Handle language change.
   * @param {Object} lang The language object.
   */
  const handleLanguageChange = lang => () => {
    setLanguage(lang);
  };

  return (
    <div
      onClick={handleLanguageMenuOpen}
      className={clsx(
        styles.languageContainer,
        isSmallDesktop ? styles.languageContainerSmallDesktop : styles.languageContainerLargeDesktop,
      )}
    >
      <span className={styles.language}>{language.language}</span>
      <img
        className={clsx(styles.languageIcon, styles.languageIconDisplay)}
        src={language.flagSrc}
        alt={`${language.abbreviation} flag icon`}
      />
      <aside
        ref={ref}
        className={clsx(
          styles.languageMenu,
          isSmallDesktop ? styles.languageMenuSmallDesktop : styles.languageMenuLargeDesktop,
          !isOpen && styles.hidden,
        )}
      >
        <ul>
          {LANGUAGES.map(lang => (
            <li key={lang.language} className={styles.languageMenuItem} onClick={handleLanguageChange(lang)}>
              <p className={styles.languageMenuItemContent}>{lang.language}</p>
              <img className={styles.languageIcon} src={lang.flagSrc} alt={`${lang.abbreviation} flag icon`} />
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
