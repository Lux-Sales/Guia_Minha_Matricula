import React, { useState } from 'react';
import { MainDiv } from './styles';

const ProfessorRegister: React.FC = () => {
  const [professorName, setProfessorName] = useState('');

  return (
    <>
      <MainDiv>
        <header>
          <strong>Cadastre um Docente!</strong>
        </header>

        <div>
          <label htmlFor="professorName">Nome do Docente</label>
          <input name="professorName" onChange={(e) => setProfessorName(e.target.value)} />
          <button>
            Cadastrar
          </button>
        </div>
      </MainDiv>
    </>
  );
};
export default ProfessorRegister;
