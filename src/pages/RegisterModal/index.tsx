import React from 'react';
import { MainDiv } from './styles';

const RegisterModal: React.FC = () => (
  <>
    <MainDiv>
      <strong>Cadastre-se</strong>
      <label htmlFor="name">Nome</label>
      <input name="name" type="input" placeholder="Nome" />
      <label htmlFor="lastName">Sobrenome</label>
      <input name="lastName" type="input" placeholder="Sobrenome" />
      <label htmlFor="email">Email Institucional</label>
      <input name="email" type="email" placeholder="Email" />
      <label htmlFor="password">Senha</label>
      <input type="password" name="password" placeholder="Senha" />
      <label htmlFor="confirmPassword">Confirmar Senha</label>
      <input type="password" name="confirmPassword" placeholder="Confirmar senha" />
      <div>
        <button>Cadastrar</button>
        <button>Voltar</button>
      </div>
    </MainDiv>
  </>
);

export default RegisterModal;
