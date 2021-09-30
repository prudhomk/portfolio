import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {

  const history = useHistory();

  const handleClick = () => {
    history.push('/Resume.pdf');
    window.location.reload();
  };

  return (
    <div className={styles.Header}>
      <Link to="/">kalan prudhomme</Link>
      <h2>fullstack software developer</h2>
      <button onClick={handleClick} to="/Resume.pdf">Resume</button>
      <Link to="/contact">Contact Me</Link>
    </div>
  );
}
