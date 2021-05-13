import React, { useState } from 'react';
import { Subject } from '../../service/DataService';
import CommentForm from '../CommentForm';
import { MainDiv } from './styles';

interface SubjectNameProps{
    subject: Subject;
<<<<<<< HEAD
    userID: string;
=======
>>>>>>> 578f4e0afb1330831798fff75e23d823bc0256ba
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
