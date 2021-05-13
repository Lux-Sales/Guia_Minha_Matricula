import React, { useState } from 'react';
import { Subject } from '../../service/DataService';
import { MainDiv } from './styles';
import CommentForm from '../CommentForm';

interface SearchBarResultProps{
    subject: Subject;
}

const SearchBarResult: React.FC<SearchBarResultProps> = (props: SearchBarResultProps) => {
  const { subject } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <MainDiv onClick={() => { setShowModal(true); }}>
      <span>
        {subject.name}
      </span>
      <div>
        {showModal && <CommentForm setShowModal={setShowModal} subjectID={subject.id} />}
      </div>
    </MainDiv>
  );
};
export default SearchBarResult;
