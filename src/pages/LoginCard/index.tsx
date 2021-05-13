import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { failedLoginMessage, login } from '../../service/UserService';
import { MainDiv } from './styles';

interface LoginCardProps{
    setIsSignUpModalOpen: (signUpModalState: boolean) => void;
    setUserID: React.Dispatch<React.SetStateAction<string>>
}

const LoginCard: React.FC<LoginCardProps> = (props: LoginCardProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { setUserID } = props;

  const setID = async () => {
    try {
      const response = await login({
        email,
        password,
      });
      setUserID(response.id);
      localStorage.setItem('@user-id', response.id);
      history.push('/userHome');
    } catch (e) {
      failedLoginMessage();
    }
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
          <button onClick={() => setID()}>
            Entrar
          </button>
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
