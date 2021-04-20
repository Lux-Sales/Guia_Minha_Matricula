import React, { useState } from 'react';
import LoginCard from '../LoginCard/index';
import NavBar from '../NavBar';
import RegisterModal from '../RegisterModal';
import { MainDiv } from './styles';

const LoginPage: React.FC = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <>
      <NavBar />
      {isRegisterModalOpen && <RegisterModal setIsRegisterModalOpen={setIsRegisterModalOpen} />}
      <MainDiv>
        <LoginCard setIsRegisterModalOpen={setIsRegisterModalOpen} />
        <img src="imgs/people-connected-in-a-web.png" alt="fundo" />
      </MainDiv>
    </>

  );
};
export default LoginPage;
