import React, { useState } from 'react';
import SearchBarResult from '../SearchBarResult';
import { MainDiv, ResultsDiv } from './styles';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const disciplinas = [
    'Orientação a Objetos',
    'Algoritmos e Programação de Computadores',
    'Cálculo 1',
    'Cálculo 2',
    'Cálculo 3',
    'Engenharia e Ambiente',
    'Introdução a Engenharia',
    'Teoria de Eletrônica Digital',
    'Matemática Discreta 1',
    'Matemática Discreta 2',
    'Métodos de Desenvolvimento de Software',
    'Compiladores',
  ];

  const dynamicSearch = () => (
    disciplinas.filter((name) => name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <MainDiv>
        <input type="text" placeholder="Pesquise uma Disciplina" onChange={(e) => setSearchTerm(e.target.value)} />
        <ResultsDiv>
          {dynamicSearch().map((name) => <SearchBarResult subjectName={name} />)}
        </ResultsDiv>
      </MainDiv>
    </>
  );
};
export default SearchBar;
