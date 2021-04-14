import React from 'react';
import './style.css';

const LoginCard: React.FC = () => (
  <div className="centro">
    <h1>Guia Minha Matricula</h1>

    <form>
      <div className="formulario">
        <input type="email" placeholder="Email" required />
      </div>

      <div className="formulario">
        <input type="password" placeholder="senha" required />
      </div>

      <div className="link1">
        <a href="/link1"> Esqueceu sua senha ? </a>
      </div>

      <div className="formulario">
        <input className="botao" type="submit" value="entrar" />
      </div>

      <div className="link2">
        <a href="/link2"> torne-se um membro </a>
      </div>
    </form>

  </div>
);

export default LoginCard;
