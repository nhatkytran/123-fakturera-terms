import clsx from 'clsx';

import { LANGUAGES } from '@/features/layout/data';
import parentStyles from '../../LanguageSelector.module.css';
import styles from './LanguageMenu.module.css';

/** Language menu component.
 * @param {Object} props The props object.
 * @param {boolean} props.isSmallDesktop Whether it is small desktop.
 * @param {function} props.onLanguageChange The language change handler.
 */
export default function LanguageMenu({ isSmallDesktop = true, onLanguageChange }) {
  return (
    <aside
      className={clsx(
        styles.languageMenu,
        isSmallDesktop ? styles.languageMenuSmallDesktop : styles.languageMenuLargeDesktop,
      )}
    >
      <ul>
        {LANGUAGES.map(lang => (
          <li key={lang.language} className={styles.languageMenuItem} onClick={onLanguageChange(lang)}>
            <p className={styles.languageMenuItemContent}>{lang.language}</p>
            <img className={parentStyles.languageIcon} src={lang.flagSrc} alt={`${lang.abbreviation} flag icon`} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
