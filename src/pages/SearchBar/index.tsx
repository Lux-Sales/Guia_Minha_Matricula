import React, { useState, useEffect } from 'react';
import SearchBarResult from '../SearchBarResult';
import { MainDiv, ResultsDiv } from './styles';
import { Subject, getSubjects } from '../../service/DataService';

interface SearchBarProps{
    userID: string
}

const SearchBar: React.FC<SearchBarProps> = (props:SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const { userID } = props;

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
          {dynamicSearch().map((subject) => <SearchBarResult subject={subject} userID={userID} />)}
        </ResultsDiv>
      </MainDiv>
    </>
  );
};
export default SearchBar;
