import styles from './Terms.module.css';

/** Terms component. */
export default function Terms() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Terms</h1>
          <button>Close and Go Back</button>
        </header>
      </div>
    </section>
  );
}
