import React from 'react';
import { MainDivInherited } from './styles';

const NickManeCard: React.FC = () => (
  <MainDivInherited>
    <header>
      <strong>Troque seu apelido</strong>
    </header>

    <label>
      Digite seu novo apelido
      <input type="text" />
    </label>

    <button>
      Trocar
    </button>

  </MainDivInherited>
);

export default NickManeCard;
