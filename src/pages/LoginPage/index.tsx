import React from 'react';
import LoginCard from '../../components/LoginCard';
import NavBar from '../NavBar';
import './style.css';

const LoginPage: React.FC = () => (
  <>
    <header>
      <NavBar />
    </header>

    <div className="conteiner">
      <LoginCard />
      <img src="imgs/rostos_com_tracos_login.svg" alt="fundo" />
    </div>

  </>
);
export default LoginPage;
