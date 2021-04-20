/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';
import Swal from 'sweetalert2';
import api from './API';

interface User{
    email:string,
    password:string
}

interface SignupData{
    first_name:string,
    last_name:string,
    email:string,
    password:string,
}

export const login = async (user:User): Promise<void> => {
  const response = await api.post('login/', user);
};

export const createUser = async (signUpData:SignupData): Promise<void|AxiosResponse> => {
  api.post('createuser/', signUpData).then((response) => {
    Swal.fire({
      title: 'Usuário cadastrado!',
      icon: 'success',
      confirmButtonText: 'Prosseguir',
    });
  }).catch((e) => {
    (Swal.fire({
      title: 'Oops!',
      text: 'Algo deu errado, tente novamente mais tarde',
      icon: 'error',
      confirmButtonText: 'Prosseguir',
    }));
  });
};
