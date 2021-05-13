import React, { useState, useEffect } from 'react';
import SearchBarResult from '../SearchBarResult';
import { MainDiv, ResultsDiv } from './styles';
import { Subject, getSubjects } from '../../service/DataService';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const fetchSubjects = async () => {
    const _subjects = await getSubjects();
    setSubjects(_subjects);
  };
  useEffect(() => {
    fetchSubjects();
  }, []);

  const dynamicSearch = () => (
    subjects.filter(((subject) => subject.name.toLowerCase().includes(searchTerm.toLowerCase()))));

  return (
    <>
      <MainDiv>
        <input type="text" placeholder="Pesquise uma Disciplina" onChange={(e) => setSearchTerm(e.target.value)} />
        <ResultsDiv>
          {dynamicSearch().map((subject) => <SearchBarResult subject={subject} />)}
        </ResultsDiv>
      </MainDiv>
    </>
  );
};
export default SearchBar;
