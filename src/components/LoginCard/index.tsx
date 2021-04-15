import React from 'react';
import './style.css';

const LoginCard: React.FC = () => (

  <div className="centro">

    <div className="titulo">
      <img src="imgs/circulo_logo_login.svg" alt="fundo" />
      <h1>Guia Minha Matricula</h1>
    </div>

    <form>
      <div className="formulario">
        <div className="formulario-item">
          <input type="email" placeholder="Email" required />
        </div>

        <div className="formulario-item">
          <input type="password" placeholder="senha" required />
        </div>

        <div className="formulario-item">
          <input className="botao" type="submit" value="entrar" />
        </div>

        <div id="link1" className="formulario-item">
          <a className="link" href="/link1"> Esqueceu sua senha ? </a>
          <a className="link" href="/link2"> Torne-se um membro </a>
        </div>

      </div>
    </form>

  </div>

);

export default LoginCard;
