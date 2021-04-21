import React, { useState } from 'react';
import { MainDiv, OverlayDiv } from './styles';
import { createUser } from '../../service/UserService';

interface SignUpModalProps{
    setIsSignUpModalOpen: (signUpModalState: boolean) => void;
}

const SignUpModal: React.FC<SignUpModalProps> = (props: SignUpModalProps) => {
  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const samePassword = () => {
    if (password === confirmPassword) return true;
    return false;
  };
  return (
    <OverlayDiv>
      <MainDiv>
        <header>
          <strong>Cadastre-se</strong>
          <button onClick={() => props.setIsSignUpModalOpen(false)}>
            <img src="imgs/close.svg" alt="fechar" />
          </button>
        </header>
        <div>
          <label htmlFor="name">Nome</label>
          <input name="name" type="input" placeholder="Nome" onChange={(e) => setUserName(e.target.value)} />
          <label htmlFor="lastName">Sobrenome</label>
          <input name="lastName" type="input" placeholder="Sobrenome" onChange={(e) => setUserLastName(e.target.value)} />
          <label htmlFor="email">Email Institucional</label>
          <input name="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input type="password" name="confirmPassword" placeholder="Confirmar senha" onChange={(e) => setConfirmPassword(e.target.value)} />
          <button
            onClick={() => createUser({
              first_name: userName,
              last_name: userLastName,
              email,
              password,
            })}
            disabled={!samePassword()}
          >
            Cadastrar
          </button>
        </div>
      </MainDiv>
    </OverlayDiv>
  );
};

export default SignUpModal;
