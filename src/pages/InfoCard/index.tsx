import React from 'react';
import { Div } from './styles';

interface InfoCardProps {
    title: string
    text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, text }) => (
  <>
    <Div>
      <img src="imgs/Icon.png" alt="livro e lápis" />
      <h2>{title}</h2>
      <span>
        {text}
      </span>
    </Div>
  </>
);
export default InfoCard;
