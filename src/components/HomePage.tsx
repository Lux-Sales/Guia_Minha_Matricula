import React from 'react';
import HomeContent from './HomeContent';
import styles from '../styles/components/HomePage.module.css';
import RegisterProvider from '../contexts/RegisterContext';
import RegisterModal from './RegisterModal';

function HomePage() {
  return (
    <RegisterProvider>
      <div className={styles.container}>
        <HomeContent />
        <img src="imgs/designer_1.png" alt="fundo" className={styles.homeImg} />
      </div>
      <RegisterModal />
    </RegisterProvider>
  );
}

export default HomePage;
