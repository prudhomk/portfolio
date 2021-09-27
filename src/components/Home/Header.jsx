import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <div className={styles.Header}>
      <Link to="/">kalan prudhomme</Link>
      <h2>fullstack software developer</h2>
      <Link to="/Resume.pdf">Resume</Link>
      <Link to="/contact">Contact Me</Link>
    </div>
  );
}
