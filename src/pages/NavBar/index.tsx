import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Div } from './styles';

const NavBar: React.FC = () => (
  <Header>
    <Div>
      <Link to="/"><img src="imgs/logo.png" alt="logo" /></Link>
      <Link to="/sobre"><span>Sobre</span></Link>
      <span>Contato</span>
    </Div>
    <Link to="/login">
      <button type="button">Login</button>
    </Link>
  </Header>
);

export default NavBar;
