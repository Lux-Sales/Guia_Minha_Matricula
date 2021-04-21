import React, { useState } from 'react';
import LoginCard from '../LoginCard/index';
import NavBar from '../NavBar';
import SignUpModal from '../SignUpModal';
import { MainDiv } from './styles';

const LoginPage: React.FC = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <>
      <NavBar />
      {isSignUpModalOpen && <SignUpModal setIsSignUpModalOpen={setIsSignUpModalOpen} />}
      <MainDiv>
        <LoginCard setIsSignUpModalOpen={setIsSignUpModalOpen} />
        <img src="imgs/people-connected-in-a-web.png" alt="fundo" />
      </MainDiv>
    </>

  );
};
export default LoginPage;
