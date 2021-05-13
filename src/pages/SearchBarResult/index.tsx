import React, { useState } from 'react';
import { Subject } from '../../service/DataService';
import { MainDiv } from './styles';
import CommentForm from '../CommentForm';
import SubjectName from '../SubjectName';

interface SearchBarResultProps{
    subject: Subject;
    userID:string
}

const SearchBarResult: React.FC<SearchBarResultProps> = (props: SearchBarResultProps) => {
  const { subject, userID } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <MainDiv>
      <div>
        {showModal && <CommentForm setShowModal={setShowModal} subject={subject} userID={userID} />}
      </div>
      <SubjectName subject={subject} setShowModal={setShowModal} userID={userID} />
    </MainDiv>
  );
};
export default SearchBarResult;
