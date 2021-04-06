import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/NavBar.module.css';

function NavBar() {
  return (
    <header className={styles.navBar}>
      <div>
        <Link to="/"><img src="imgs/logo.png" alt="logo" /></Link>
        <span>Sobre</span>
        <span>Contato</span>
      </div>
      <Link to="/login"><button type="button">Login</button></Link>
    </header>
  );
}

export default NavBar;
