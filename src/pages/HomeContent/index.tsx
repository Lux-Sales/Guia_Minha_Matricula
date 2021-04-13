import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterModal from '../RegisterModal';
import { Div, ButtonsDiv, MainDiv } from './styles';

const HomeContent: React.FC = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };
  return (
    <>
      {modal && <RegisterModal />}
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
            <button onClick={showModal}>Cadastrar</button>
            <Link to="/sobre"><button type="button">Saiba Mais</button></Link>
          </ButtonsDiv>
        </Div>
        <img src="imgs/designer_1.png" alt="fundo" />
      </MainDiv>
    </>
  );
};

export default HomeContent;
