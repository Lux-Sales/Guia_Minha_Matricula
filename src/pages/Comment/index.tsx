import React from 'react';
import { MainDiv } from './styles';

interface CommentProps {
    name: string
    text: string;
    teacher: string;
}

const Comment: React.FC<CommentProps> = ({ name, text, teacher }) => (
  <>
    <MainDiv>
      <div>
        <h2>{name}</h2>
        <p>,sobre o(a) docente</p>
        <h2>{teacher}</h2>
        <span>
          {text}
        </span>
      </div>
    </MainDiv>
  </>
);
export default Comment;
