import Swal from 'sweetalert2';
import api from './API';

export interface Subject{
    name: string,
    registerID: string
}

export interface Teacher{
    name: string,
}

export const getSubjects = async () => {
  const response = await api.get('/subjects');
  return response;
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
  const response = await api.post('teachers/', teacher).then((res) => {
    Swal.fire({
      title: 'Docente cadastrado!',
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
