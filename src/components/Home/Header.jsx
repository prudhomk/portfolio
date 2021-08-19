import React from 'react';
import ThemeToggle from './ThemeToggle';
import styles from './Header.css';

export default function Header() {
  return (
    <div className={styles.Header}>
      <ThemeToggle />
    </div>
  );
}
