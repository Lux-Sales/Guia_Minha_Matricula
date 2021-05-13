import React, { useState } from 'react';
import { addTeacher } from '../../service/DataService';
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
          <input name="professorName" onChange={(e) => setProfessorName(e.target.value.toLowerCase())} />
          <button onClick={() => addTeacher({
            id: '',
            name: professorName,
          })}
          >
            Cadastrar
          </button>
        </div>
      </MainDiv>
    </>
  );
};
export default ProfessorRegister;
