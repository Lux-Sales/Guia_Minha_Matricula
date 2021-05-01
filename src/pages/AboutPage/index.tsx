import React from 'react';
import InfoCard from '../InfoCard';
import {
  CardsContainer, HeaderInfo, MainDiv, RightDiv,
} from './styles';
import NavBar from '../NavBar';

const AboutPage:React.FC = () => (
  <>
    <NavBar />
    <MainDiv>
      <img src="imgs/unb_alunos.jpg" alt="campus unb" />
      <RightDiv>
        <HeaderInfo>
          <h1>Feito por quem é da Unb para a UnB!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
            Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
        </HeaderInfo>
        <CardsContainer>
          <InfoCard
            title="Veja experiências de outros discentes."
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor."
          />
          <InfoCard
            title="Docentes, contribuam também!"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor."
          />
          <InfoCard
            title="Compartilhe sua opinião."
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor."
          />
          <InfoCard
            title="Seja respeitoso"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor."
          />
        </CardsContainer>
      </RightDiv>
    </MainDiv>
  </>
);

export default AboutPage;
