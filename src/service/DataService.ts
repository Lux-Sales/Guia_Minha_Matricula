/* eslint-disable consistent-return */
import Swal from 'sweetalert2';
import api from './API';

export interface Subject{
    id:string,
    name: string,
    registerID: string
}

export interface Teacher{
    id:string,
    name: string,
}

export interface Comment{
    comment:string,
    teacher:Teacher,
    subject:Subject,
    userID:string
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

export const getTeachers = async () => {
  const response = await api.get('/teachers');
  return response;
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

export const addComment = async (comment:Comment) => {
  const response = await api.post('comments/', comment);
  return response;
};
