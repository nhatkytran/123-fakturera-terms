import MainBackground from './components/MainBackground';
import Navbar from './components/Navbar';
import styles from './Layout.module.css';

/**
 * Layout component.
 * @param {Object} props The props object.
 * @param {React.ReactNode} props.children The children elements.
 */
export default function Layout({ children }) {
  return (
    <main className={styles.main}>
      <MainBackground />
      <Navbar />
      {children}
    </main>
  );
}
