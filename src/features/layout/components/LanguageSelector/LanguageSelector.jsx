import { useState } from 'react';
import clsx from 'clsx';

import { LANGUAGES, SVENSKA } from '@/features/layout/data';
import LanguageMenu from './components/LanguageMenu';
import styles from './LanguageSelector.module.css';

/**
 * Language selector component.
 * @param {Object} props The props object.
 * @param {boolean} props.isSmallDesktop Whether it is small desktop.
 */
export default function LanguageSelector({ isSmallDesktop = true }) {
  const [language, setLanguage] = useState(LANGUAGES.find(lang => lang.language === SVENSKA));

  /**
   * Handle language change.
   * @param {Object} lang The language object.
   */
  const handleLanguageChange = lang => () => {
    setLanguage(lang);
  };

  return (
    <div
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
      <LanguageMenu isSmallDesktop={isSmallDesktop} onLanguageChange={handleLanguageChange} />
    </div>
  );
}
