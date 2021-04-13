import React, { useState } from 'react';
import { MainDiv } from './styles';
import { createUser } from '../../service/UserService';

const RegisterModal: React.FC = () => {
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
    <>
      <MainDiv>
        <strong>Cadastre-se</strong>
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
        <div>
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
          <button>Voltar</button>
        </div>
      </MainDiv>
    </>
  );
};

export default RegisterModal;
