import React from 'react';
import { FcLock, FcFullTrash, FcBusinesswoman } from 'react-icons/fc';
import { MainDiv, StyledLink } from './styles';

const ColumnLeftConfig : React.FC = () => (
  <MainDiv>

    <header>
      <strong>Configurações</strong>
    </header>

    <ul>
      <li>
        <div>
          <StyledLink to="/Configuration-Password">
            <FcLock />
            alterar senha
          </StyledLink>
        </div>
      </li>
      <li>
        <div>
          <StyledLink to="/Configuration-NickName">
            <FcBusinesswoman />
            alterar seu apelido
          </StyledLink>
        </div>
      </li>
      <li>
        <div>
          <StyledLink to="/Configuration-DeleteCont">
            <FcFullTrash />
            delete sua conta
          </StyledLink>
        </div>
      </li>
    </ul>
  </MainDiv>
);

export default ColumnLeftConfig;
