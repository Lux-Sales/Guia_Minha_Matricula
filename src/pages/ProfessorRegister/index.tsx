import React, { useContext, useState } from 'react';
import { TokenContext } from '../../contexts/TokenContext';
import { MainDiv } from './styles';

const ProfessorRegister: React.FC = () => {
  const [professorName, setProfessorName] = useState('');
  const { token } = useContext(TokenContext);

  return (
    <>
      <MainDiv>
        <header>
          <strong>Cadastre um Docente!</strong>
        </header>

        <div>
          <label htmlFor="professorName">Nome do Docente</label>
          <input name="professorName" onChange={(e) => setProfessorName(e.target.value)} />
          <button onClick={() => console.log(token)}>
            Cadastrar
          </button>
        </div>
      </MainDiv>
    </>
  );
};
export default ProfessorRegister;
