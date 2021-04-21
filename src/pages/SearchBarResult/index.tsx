import React from 'react';
import { MainDiv } from './styles';

interface SearchBarResultProps{
    subjectName: string;
}

const SearchBarResult: React.FC<SearchBarResultProps> = (props: SearchBarResultProps) => {
  const { subjectName } = props;

  return (
    <MainDiv>
      <div>
        {subjectName}
      </div>
    </MainDiv>
  );
};
export default SearchBarResult;
