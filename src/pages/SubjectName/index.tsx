import React, { useState } from 'react';
import { Subject } from '../../service/DataService';
import CommentForm from '../CommentForm';
import { MainDiv } from './styles';

interface SubjectNameProps{
    subject: Subject;
    userID: string;
    setShowModal: (signUpModalState: boolean) => void;
}

const SubjectName: React.FC<SubjectNameProps> = (props: SubjectNameProps) => {
  const { subject, setShowModal } = props;

  return (
    <MainDiv onClick={() => setShowModal(true)}>
      <span>
        {subject.name}
      </span>

    </MainDiv>

  );
};
export default SubjectName;
