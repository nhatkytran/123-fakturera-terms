import clsx from 'clsx';

import { useLanguageTranslations, useMenuToggle } from '@/shared/hooks';
import { LANGUAGES } from '@/features/layout/data';
import styles from './LanguageSelector.module.css';

/**
 * Language selector component.
 * @param {Object} props The props object.
 * @param {boolean} props.isSmallDesktop Whether it is small desktop.
 */
export default function LanguageSelector({ isSmallDesktop = true }) {
  const { isOpen, ref, handleMenuOpen, handleClose } = useMenuToggle();
  const { language, handleLanguageChange } = useLanguageTranslations();

  /**
   * Handle language selection.
   * @param {Object} lang The language object.
   */
  const handleSelectLanguage = lang => event => {
    event.stopPropagation();
    handleLanguageChange(lang);
    handleClose();
  };

  return (
    <div
      onClick={handleMenuOpen}
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
            <li key={lang.language} className={styles.languageMenuItem} onClick={handleSelectLanguage(lang)}>
              <p className={styles.languageMenuItemContent}>{lang.language}</p>
              <img className={styles.languageIcon} src={lang.flagSrc} alt={`${lang.abbreviation} flag icon`} />
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
