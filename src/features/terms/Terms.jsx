import clsx from 'clsx';

import { useInitialLoading } from '@/shared/hooks';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import styles from './Terms.module.css';

/** Terms component. */
export default function Terms() {
  const { initialLoading } = useInitialLoading({ initialLoadingState: true });

  return (
    <section className={clsx(styles.wrapper, initialLoading && styles.hidden)}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <Header />
          <Content />
        </div>
        <Footer />
      </div>
    </section>
  );
}
