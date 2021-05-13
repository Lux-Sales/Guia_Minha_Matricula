/* eslint-disable consistent-return */
import Swal from 'sweetalert2';
import api from './API';
import { AddComment } from '../pages/CommentForm';

export interface Subject{
    id:string,
    name: string,
    registerID: string
}

export interface Teacher{
    id:string,
    name: string,
}

export interface UserData{
    id:string,
    name: string
}

export interface Comment{
    comment:string,
    teacher:Teacher,
    subject:Subject,
    user:UserData
}

export const getSubjects = async ():Promise<Subject[]> => {
  const response = await api.get('/subjects');
  return response.data.results;
};

export const addSubject = async (subject:Subject) => {
  const response = await api.post('subjects/', subject).then((res) => {
    Swal.fire({
      title: 'Disciplina cadastrada!',
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
  return response;
};

export const getTeachers = async ():Promise<Teacher[]> => {
  const response = await api.get('/teachers');
  return response.data.results;
};

export const addTeacher = async (teacher:Teacher) => {
  try {
    const response = await api.post('teachers/', teacher);
    Swal.fire({
      title: 'Docente cadastrado!',
      icon: 'success',
      confirmButtonText: 'Prosseguir',
    });
    return response.data;
  } catch (err) {
    (Swal.fire({
      title: 'Oops!',
      text: 'Algo deu errado, tente novamente mais tarde',
      icon: 'error',
      confirmButtonText: 'Prosseguir',
    }));
  }
};

export const getComments = async (): Promise<Comment[]> => {
  const response = await api.get('/comments');
  return response.data;
};

export const addComment = async (comment:AddComment) => {
  try {
    const response = await api.post('comments/', comment);
    Swal.fire({
      title: 'Cadastrado',
      text: 'Comentário registrado',
      icon: 'success',
      confirmButtonText: 'Prosseguir',
    });
    return response;
  } catch (e) {
    Swal.fire({
      title: 'Oops!Algo deu errado.',
      text: 'Certifique-se de preencher o professor, se o erro persistir, o mesmo não está cadastrado.',
      icon: 'error',
      confirmButtonText: 'Prosseguir',
    });
  }
};
