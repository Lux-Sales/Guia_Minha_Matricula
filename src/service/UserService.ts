/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';
import Swal from 'sweetalert2';
import api from './API';

export interface User{
    email:string,
    password:string
}

interface SignupData{
    first_name:string,
    last_name:string,
    email:string,
    password:string,
}

interface LoginResponse{
  refresh: string,
  access: string,
  id: string
}

export const login = async (user:User): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('login/', user);
  return response.data;
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

export const failedLoginMessage = () => {
  Swal.fire({
    title: 'Oops!',
    text: 'Email ou senha incorreto',
    icon: 'error',
    confirmButtonText: 'Prosseguir',
  });
};
