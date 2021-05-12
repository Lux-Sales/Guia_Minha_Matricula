/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { MainDiv, FeedDiv } from './styles';
import { getComments, Comment } from '../../service/DataService';

const Feed: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const fetchComments = async () => {
    const _comments = await getComments();
    setComments(_comments);
  };
  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <MainDiv>
      <header>
        <strong>Comentários Mais Recentes</strong>
      </header>
      <FeedDiv>
        {comments.map(((comment:Comment) => comment != null && (
          <span>
            {comment.comment}
            , -
            {' '}
            {comment.subject.name}
            ,
            {' '}
            {comment.teacher.name}
          </span>
        )))}
      </FeedDiv>
    </MainDiv>
  );
};
export default Feed;
