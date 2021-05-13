/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { MainDiv, FeedDiv, CommentDiv } from './styles';
import { getComments, Comment } from '../../service/DataService';

const Feed: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const fetchComments = async () => {
    const _comments = await (await getComments()).reverse();

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
        {comments.map(((comment:Comment) => (
          <CommentDiv>
            <h2>{comment.subject.name}</h2>
            <p>ministrada por  </p>
            <h3>{comment.teacher.name}</h3>
            <p>{comment.comment}</p>
            teste
          </CommentDiv>
        )))}
      </FeedDiv>
    </MainDiv>
  );
};
export default Feed;
