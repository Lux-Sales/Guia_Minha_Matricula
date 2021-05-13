import React, { useState } from 'react';
import { Subject } from '../../service/DataService';
import { MainDiv } from './styles';
import CommentForm from '../CommentForm';
import SubjectName from '../SubjectName';

interface SearchBarResultProps{
    subject: Subject;
}

const SearchBarResult: React.FC<SearchBarResultProps> = (props: SearchBarResultProps) => {
  const { subject } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <MainDiv>
      {showModal && <CommentForm setShowModal={setShowModal} subject={subject} />}
      <SubjectName subject={subject} setShowModal={setShowModal} />
    </MainDiv>
  );
};
export default SearchBarResult;
