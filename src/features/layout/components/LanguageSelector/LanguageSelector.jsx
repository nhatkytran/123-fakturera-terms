import { useState } from 'react';
import clsx from 'clsx';

import { LANGUAGES, SVENSKA } from '@/features/layout/data';
import LanguageMenu from './components/LanguageMenu';
import styles from './LanguageSelector.module.css';

/** Language selector component. */
export default function LanguageSelector() {
  const [language, setLanguage] = useState(LANGUAGES.find(lang => lang.language === SVENSKA));

  /**
   * Handle language change.
   * @param {Object} lang The language object.
   */
  const handleLanguageChange = lang => () => {
    setLanguage(lang);
  };

  return (
    <div className={styles.languageContainer}>
      <span className={styles.language}>{language.language}</span>
      <img
        className={clsx(styles.languageIcon, styles.languageIconDisplay)}
        src={language.flagSrc}
        alt={`${language.abbreviation} flag icon`}
      />
      {/* Based on the current working state of the real page, we call LanguageMenu 2 times to replicate the behavior. */}
      <LanguageMenu isSmallDesktop onLanguageChange={handleLanguageChange} />
      <LanguageMenu isSmallDesktop={false} onLanguageChange={handleLanguageChange} />
    </div>
  );
}
