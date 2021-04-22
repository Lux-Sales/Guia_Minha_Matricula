import React from 'react';
import { MainDiv, FeedDiv } from './styles';

const Feed: React.FC = () => (
  <>
    <MainDiv>
      <header>
        <strong>Comentários Mais Recentes</strong>
      </header>
      <FeedDiv />
    </MainDiv>
  </>
);
export default Feed;
