import React, { useState } from 'react';
import LoginCard from '../LoginCard/index';
import NavBar from '../NavBar';
import SignUpModal from '../SignUpModal';
import { MainDiv } from './styles';

interface LoginProps{
    setUserID: React.Dispatch<React.SetStateAction<string>>
}

const LoginPage: React.FC<LoginProps> = (props:LoginProps) => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const { setUserID } = props;

  return (
    <>
      <NavBar />
      {isSignUpModalOpen && <SignUpModal setIsSignUpModalOpen={setIsSignUpModalOpen} />}
      <MainDiv>
        <LoginCard setIsSignUpModalOpen={setIsSignUpModalOpen} setUserID={setUserID} />
        <img src="imgs/people-connected-in-a-web.png" alt="pessoas conectadas por nós" />
      </MainDiv>
    </>

  );
};
export default LoginPage;
