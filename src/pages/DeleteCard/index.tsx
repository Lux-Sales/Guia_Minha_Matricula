import React from 'react';
import { MainDivInherited } from './styles';

const DeleteCard: React.FC = () => (
  <MainDivInherited>
    <strong>
      <h1>Você deseja deletar a sua conta</h1>
    </strong>
    <div>
      <button>Sim</button>
    </div>
  </MainDivInherited>
);

export default DeleteCard;
