import React, { useState, useEffect } from 'react';
import { CommentFormField, MainDiv, HiperDiv } from './styles';
import {
  getComments, Comment, Subject, addComment, getTeachers,
} from '../../service/DataService';
import CommentComponent from '../Comment';

export interface AddComment{
    comment:string,
    teacher:string,
    subject:string,
    user:string
}
interface CommentFormProps{
  setShowModal: (signUpModalState: boolean) => void;
  subject: Subject;
  userID: string
}

const CommentForm: React.FC<CommentFormProps> = (props:CommentFormProps) => {
  const [text, setText] = useState('');
  const [teacherID, setTeacherID] = useState('');
  const [teacher, setTeacher] = useState('');
  const { userID, subject } = props;
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = async () => {
    const _comments = await getComments();
    setComments(_comments);
  };
  useEffect(() => {
    fetchComments();
  }, []);

  const postComment = (comment:AddComment) => {
    addComment(comment);
  };

  const findTeacher = async () => {
    const allTeachers = await getTeachers();
    const foundTeacher = allTeachers.find((_teacher) => _teacher.name.toLowerCase() === teacher.toLowerCase());
    return foundTeacher;
  };

  const fetchTeacherID = async () => {
    const _teacher = await findTeacher();
    if (_teacher !== undefined) { setTeacherID(_teacher.id); }
  };

  useEffect(() => {
    fetchTeacherID();
  }, [teacher]);

  return (
    <HiperDiv onClick={() => props.setShowModal(false)}>
      <MainDiv>
        <header>
          <strong>Relate sua Experiência!</strong>
          <label htmlFor="teacherLabel"> Professor: </label>
          <input
            type="text"
            id="teacherLabel"
            onChange={(e) => {
              setTeacher(e.target.value);
            }}
          />
          <button onClick={() => props.setShowModal(false)}>
            <img src="imgs/close.svg" alt="fechar" />
          </button>
        </header>
        <CommentFormField>
          <textarea rows={8} placeholder="Escreva aqui!" onChange={(e) => setText(e.target.value)} />
          <button
            onClick={() => {
              postComment({
                comment: text,
                teacher: teacherID,
                subject: subject.id,
                user: userID,
              });
              console.log({
                comment: text,
                teacher: teacherID,
                subject: subject.id,
                user: userID,
              });
            }}
          >
            Postar Comentário
          </button>
        </CommentFormField>
        <div>
          <strong>Relatos</strong>
        </div>
        <div>
          {comments.map((com) => com.subject.id === subject.id && <CommentComponent name={com.user.name} text={com.comment} />)}
        </div>
      </MainDiv>
    </HiperDiv>
  );
};

export default CommentForm;
