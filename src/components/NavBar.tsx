import React from 'react';
import styles from '../styles/components/NavBar.module.css';

function NavBar() {
  return (
    <header className={styles.navBar}>
      <div>
        <img src="imgs/logo.png" alt="logo" />
        <span>About Us</span>
        <span>Contact</span>
      </div>
      <button type="button">Login</button>
    </header>
  );
}

export default NavBar;
