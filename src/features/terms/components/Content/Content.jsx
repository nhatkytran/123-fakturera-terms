import { useEffect } from 'react';

import { getTranslations } from '@/api/services';
import { useLanguageTranslations } from '@/shared/hooks';
import styles from './Content.module.css';

const test =
  '<b>BY</b> clicking Invoice Now, you choose to register according to the information that you have typed in and the text on the registration page and the terms here, and you at the same time accept the terms here.';

/** Content component. */
export default function Content() {
  const { translations } = useLanguageTranslations();

  // eslint-disable-next-line no-console
  console.log(translations);

  useEffect(() => {
    (async () => {
      const translations = await getTranslations();
      // eslint-disable-next-line no-console
      console.log(translations);
    })();
  }, []);

  return (
    <div className={styles.contentBox}>
      <div>
        <p className={styles.contentText} dangerouslySetInnerHTML={{ __html: test }}></p>
      </div>
      <div>
        <p className={styles.contentText} dangerouslySetInnerHTML={{ __html: test }}></p>
      </div>
    </div>
  );
}
