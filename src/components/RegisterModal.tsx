import { useContext } from 'react';
import styles from '../styles/components/RegisterModal.module.css';
import { RegisterContext } from '../contexts/RegisterContext';

function Cadastro() {
  const { isRegisterModalOpen, hideRegisterModal } = useContext(RegisterContext);

  function showHideModal() {
    if (isRegisterModalOpen) return styles.displayblock;
    return styles.displaynone;
  }

  return (
    <div className={showHideModal()}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <header>
            <strong>Cadastre-se</strong>
            <button type="button" onClick={hideRegisterModal} className={styles.closeButton}>
              <img src="imgs/close.svg" alt="fechar" />
            </button>
          </header>
          <form>
            <label htmlFor="name">Nome</label>
            <input id="name" type="input" />
            <label htmlFor="lastName">Sobrenome</label>
            <input id="lastName" type="input" />
            <label htmlFor="email">Email Institucional</label>
            <input id="email" type="email" />
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" id="confirmPassword" />
            <button type="submit" className={styles.registerButton}>Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
