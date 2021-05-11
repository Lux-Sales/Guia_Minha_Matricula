import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Header, Div, ButtonDiv } from './styles';

const UserNavBar: React.FC = () => {
  const history = useHistory();
  const handleLogout = () => {
    history.push('/');
  };

  return (
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
        <button onClick={handleLogout}>
          sair
        </button>
      </ButtonDiv>
    </Header>
  );
};

export default UserNavBar;
