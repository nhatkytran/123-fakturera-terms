import { useLanguageTranslations } from '@/shared/hooks';
import ContentGroup from './ContentGroup';
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
      {[textStartGroup, textMiddleGroup, textEndGroup].map((textGroup, index) => (
        <ContentGroup key={index} textGroup={textGroup} />
      ))}
    </div>
  );
}
