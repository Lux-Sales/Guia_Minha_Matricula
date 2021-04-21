import React from 'react';
import { Link } from 'react-router-dom';
import { Div, ButtonsDiv, MainDiv } from './styles';

interface HomeContentProps{
    setIsSignUpModalOpen: (arg: boolean) => void;
}

const HomeContent: React.FC<HomeContentProps> = (props: HomeContentProps) => (
  <>
    <MainDiv>
      <Div>
        <h2>Guia Minha Matrícula</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor. Aenean massa.
          Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim.
        </p>
        <ButtonsDiv>
          <button onClick={() => props.setIsSignUpModalOpen(true)}>Cadastrar</button>
          <Link to="/sobre"><button type="button">Saiba Mais</button></Link>
        </ButtonsDiv>
      </Div>
    </MainDiv>
  </>
);

export default HomeContent;
