import React from 'react';
import { MainDiv } from './styles';

interface CommentProps {
    name: string
    text: string;
}

const Comment: React.FC<CommentProps> = ({ name, text }) => (
  <>
    <MainDiv>
      <div>
        <h2>{name}</h2>
        <span>
          {text}
        </span>
      </div>
    </MainDiv>
  </>
);
export default Comment;
