import React from 'react';

interface InfoCardProps {
    title: string
    text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, text }) => (
  <>
    <div>
      <img src="imgs/Icon.png" alt="livro e lápis" />
      <h2>{title}</h2>
      <p>
        {text}
      </p>
    </div>
  </>
);
export default InfoCard;
