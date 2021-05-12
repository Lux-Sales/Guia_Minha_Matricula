import React, { useState } from 'react';
import { MainDiv } from './styles';
import { addSubject } from '../../service/DataService';

const SubjectRegister: React.FC = () => {
  const [subjectName, setSubjectName] = useState('');
  const [subjectId, setSubjectId] = useState('');

  return (
    <>
      <MainDiv>
        <header>
          <strong>Cadastre uma Disciplina!</strong>
        </header>

        <div>
          <label htmlFor="subjectName">Nome da Disciplina</label>
          <input name="subjectName" onChange={(e) => setSubjectName(e.target.value)} />
          <div>
            <label htmlFor="subjectId">Código da Disciplina</label>
            <input name="subjectId" onChange={(e) => setSubjectId(e.target.value)} />
          </div>
          <button onClick={() => {
            addSubject({
              name: subjectName,
              registerID: subjectId,
            });
          }}
          >
            Cadastrar
          </button>
        </div>
      </MainDiv>
    </>
  );
};
export default SubjectRegister;
