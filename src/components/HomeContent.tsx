import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/HomeContent.module.css';
import { RegisterContext } from '../contexts/RegisterContext';

function HomeContent() {
  const { showRegisterModal } = useContext(RegisterContext);

  return (
    <div className={styles.container}>
      <h2>Guia Minha Matrícula</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        Nulla consequat massa quis enim.
      </p>
      <div className={styles.buttons}>
        <button type="button" className={styles.registerButton} onClick={showRegisterModal}>Cadastrar</button>
        <Link to="/sobre" className={styles.link}><button type="button" className={styles.aboutButton}>Saiba Mais</button></Link>
      </div>
    </div>
  );
}

export default HomeContent;
