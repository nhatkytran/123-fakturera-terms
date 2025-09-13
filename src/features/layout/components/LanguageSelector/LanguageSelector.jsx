import { useState } from 'react';
import clsx from 'clsx';

import { LANGUAGES, SVENSKA } from '@/features/layout/data';
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
      <aside className={styles.languageMenu}>
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
