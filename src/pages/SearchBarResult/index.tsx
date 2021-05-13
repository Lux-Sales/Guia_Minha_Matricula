import React, { useState } from 'react';
import { Subject } from '../../service/DataService';
import { MainDiv } from './styles';
import CommentForm from '../CommentForm';

interface SearchBarResultProps{
    subject: Subject;
    userID:string
}

const SearchBarResult: React.FC<SearchBarResultProps> = (props: SearchBarResultProps) => {
  const { subject, userID } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <MainDiv onClick={() => { setShowModal(true); }}>
      <span>
        {subject.name}
      </span>
      <div>
        {showModal && <CommentForm setShowModal={setShowModal} subject={subject} userID={userID} />}
      </div>
    </MainDiv>
  );
};
export default SearchBarResult;
