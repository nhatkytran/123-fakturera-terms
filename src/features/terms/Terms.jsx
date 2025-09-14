import Header from './components/Header';
import styles from './Terms.module.css';

/** Terms component. */
export default function Terms() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
      </div>
    </section>
  );
}
