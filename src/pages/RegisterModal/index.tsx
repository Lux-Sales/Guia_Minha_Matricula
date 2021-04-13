import React from 'react';

const RegisterModal: React.FC = () => (
  <>
    <div>
      <div>
        <div>
          <header>
            <strong>Cadastre-se</strong>
            <button>
              <img src="imgs/close.svg" alt="fechar" />
            </button>
          </header>
          <form>
            <label htmlFor="name">Nome</label>
            <input id="name" type="input" />
            <label htmlFor="lastName">Sobrenome</label>
            <input id="lastName" type="input" />
            <label htmlFor="email">Email Institucional</label>
            <input id="email" type="email" />
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" id="confirmPassword" />
            <button>Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  </>
);

export default RegisterModal;
