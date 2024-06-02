
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My Modern Blog</h1>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
