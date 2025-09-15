import { useLanguageTranslations } from '@/shared/hooks';
import styles from './Content.module.css';

/** Content component. */
export default function Content() {
  const {
    translations: {
      terms: { textStartGroup, textMiddleGroup, textEndGroup },
    },
  } = useLanguageTranslations();

  return (
    <div className={styles.contentBox}>
      <div>
        {textStartGroup.map((text, index) => (
          <p key={index} className={styles.contentText} dangerouslySetInnerHTML={{ __html: text }}></p>
        ))}
      </div>
      <div>
        {textMiddleGroup.map((text, index) => (
          <p key={index} className={styles.contentText} dangerouslySetInnerHTML={{ __html: text }}></p>
        ))}
      </div>
      <div>
        {textEndGroup.map((text, index) => (
          <p key={index} className={styles.contentText} dangerouslySetInnerHTML={{ __html: text }}></p>
        ))}
      </div>
    </div>
  );
}
