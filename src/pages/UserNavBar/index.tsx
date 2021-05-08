import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Div, ButtonDiv } from './styles';

const UserNavBar: React.FC = () => (
  <Header>
    <Div>
      <Link to="/userhome"><img src="imgs/logo.png" alt="logo" /></Link>
      <Link to="/Configuration-Password"><span>Configurações</span></Link>
    </Div>
    <ButtonDiv>
      <button type="button">
        <div>
          <p>Olá,</p>
          <strong>User</strong>
        </div>
      </button>
      <button>
        sair
      </button>
    </ButtonDiv>
  </Header>
);

export default UserNavBar;
