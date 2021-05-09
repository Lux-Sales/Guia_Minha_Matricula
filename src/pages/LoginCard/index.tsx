import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TokenContext } from '../../contexts/TokenContext';
import { login, failedLoginMessage } from '../../service/UserService';
import { MainDiv } from './styles';

interface LoginCardProps{
    setIsSignUpModalOpen: (signUpModalState: boolean) => void;
}

const LoginCard: React.FC<LoginCardProps> = (props: LoginCardProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { token, updateToken, authenticateUser } = useContext(TokenContext);
  let obj;

  const history = useHistory();

  const handleClick = async () => {
    // updateToken(await login({
    //   email,
    //   password,
    // }));
    // console.log(token);
    // authenticateUser();
    // history.push('/userhome');
    login({
      email,
      password,
    }).then((response) => {
      updateToken(response);
      console.log(token);
      authenticateUser();
      history.push('/userhome');
    }).catch((e) => failedLoginMessage());
    // obj = await login({
    //   email,
    //   password,
    // }).then((result) => {
    //   updateToken(result);
    // }).then(() => {
    //   console.log(token);
    //   history.push('/userhome');
    // });
  };

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
          {/* <Link to="/userhome"> */}
          <button
            onClick={handleClick}
          >
            Entrar
          </button>
          {/* </Link> */}
        </div>

        <div>
          <span> Esqueceu sua senha ? </span>
          <span
            onClick={() => props.setIsSignUpModalOpen(true)}
            onKeyDown={() => props.setIsSignUpModalOpen(true)}
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
