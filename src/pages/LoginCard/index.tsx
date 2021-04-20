import React, { useState } from 'react';
import { login } from '../../service/UserService';
import { MainDiv } from './styles';

interface LoginCardProps{
    setIsRegisterModalOpen: (arg0: boolean) => void;
}

const LoginCard: React.FC<LoginCardProps> = (props: LoginCardProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <MainDiv>
        <header>
          <strong>Guia Minha Matrícula</strong>
        </header>

        <div>
          <label htmlFor="email">Email Institucional</label>
          <input name="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
          <button
            onClick={() => login({
              email,
              password,
            })}
          >
            Entrar
          </button>
        </div>

        <div>
          <span> Esqueceu sua senha ? </span>
          <span
            onClick={() => props.setIsRegisterModalOpen(true)}
            onKeyDown={() => props.setIsRegisterModalOpen(true)}
            role="button"
            tabIndex={0}
          >
            Cadastre-se
          </span>
        </div>
      </MainDiv>
    </>

  );
};

export default LoginCard;
