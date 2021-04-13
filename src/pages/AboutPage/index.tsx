import React from 'react';
import InfoCard from '../InfoCard';
import { MainDiv, TextDiv } from './styles';

const AboutPage:React.FC = () => (
  <MainDiv>
    <img src="imgs/unb_alunos.jpg" alt="campus unb" />
    <TextDiv>
      <div>
        <header>Feito por quem é da Unb para a UnB!</header>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor. Aenean massa.
          Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
          Donec quam felis,
          ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
      </div>
      <div>
        <InfoCard
          title="Veja experiências de outros discentes."
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor."
        />
        <InfoCard
          title="Veja experiências de outros discentes."
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor."
        />
        <InfoCard
          title="Veja experiências de outros discentes."
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor."
        />
        <InfoCard
          title="Veja experiências de outros discentes."
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor."
        />
      </div>
    </TextDiv>
  </MainDiv>
);

export default AboutPage;
