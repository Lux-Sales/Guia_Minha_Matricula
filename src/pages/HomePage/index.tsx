import React, { useState } from 'react';
import NavBar from '../NavBar';
import HomeContent from '../HomeContent';
import { MainDiv } from './styles';
import SignUpModal from '../SignUpModal';

const HomePage: React.FC = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <>
      <NavBar />
      {isSignUpModalOpen && <SignUpModal setIsSignUpModalOpen={setIsSignUpModalOpen} />}
      <MainDiv>
        <HomeContent setIsSignUpModalOpen={setIsSignUpModalOpen} />
        <img src="imgs/designer_1.png" alt="fundo" />
      </MainDiv>
    </>
  );
};

export default HomePage;
