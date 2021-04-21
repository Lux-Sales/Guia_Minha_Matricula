import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Div } from './styles';

const UserNavBar: React.FC = () => (
  <Header>
    <Div>
      <Link to="/userhome"><img src="imgs/logo.png" alt="logo" /></Link>
      <Link to="/userhome"><span>Sobre</span></Link>
      <span>Contato</span>
    </Div>
    <button type="button">
      <div>
        <p>Olá,</p>
        <strong>User</strong>
      </div>
      <img src="imgs/arrow-down.png" alt="seta pra baixo" />
    </button>
  </Header>
);

export default UserNavBar;
