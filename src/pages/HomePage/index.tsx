import React, { useState } from 'react';
import NavBar from '../NavBar';
import HomeContent from '../HomeContent';
import { MainDiv } from './styles';
import RegisterModal from '../RegisterModal';

const HomePage: React.FC = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <>
      <NavBar />
      {isRegisterModalOpen && <RegisterModal setIsRegisterModalOpen={setIsRegisterModalOpen} />}
      <MainDiv>
        <HomeContent setIsRegisterModalOpen={setIsRegisterModalOpen} />
        <img src="imgs/designer_1.png" alt="fundo" />
      </MainDiv>
    </>
  );
};

export default HomePage;
