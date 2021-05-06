import React from 'react';
import { MainDivInherited } from './styles';

const ChangePasswordCard: React.FC = () => (
  <MainDivInherited>
    <header>
      <strong>Mude sua senha</strong>
    </header>

    <label>
      Digite sua senha atual
      <input type="password" />
    </label>

    <label>
      Digite sua nova senha
      <input type="password" />
    </label>

    <label>
      Digite sua senha atual novamente
      <input type="password" />
    </label>

    <button>
      Subimeter
    </button>

  </MainDivInherited>
);

export default ChangePasswordCard;
