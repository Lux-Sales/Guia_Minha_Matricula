import React, { useState } from 'react';
import { MainDiv, OverlayDiv } from './styles';
import { createUser } from '../../service/UserService';

interface RegisterModalProps{
    setIsRegisterModalOpen: (arg0: boolean) => void;
}

const RegisterModal: React.FC<RegisterModalProps> = (props: RegisterModalProps) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
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
          <button onClick={() => props.setIsRegisterModalOpen(false)}>
            <img src="imgs/close.svg" alt="fechar" />
          </button>
        </header>
        <div>
          <label htmlFor="name">Nome</label>
          <input name="name" type="input" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
          <label htmlFor="lastName">Sobrenome</label>
          <input name="lastName" type="input" placeholder="Sobrenome" onChange={(e) => setLastName(e.target.value)} />
          <label htmlFor="email">Email Institucional</label>
          <input name="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input type="password" name="confirmPassword" placeholder="Confirmar senha" onChange={(e) => setConfirmPassword(e.target.value)} />
          <button
            onClick={() => createUser({
              first_name: name,
              last_name: lastName,
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

export default RegisterModal;
