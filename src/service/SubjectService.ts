import api from './API';

export interface Subject{
    name: string,
    registerID: string
}
export const getSubjects = async () => {
  const response = await api.get('/subjects');
  return response;
};

export const addSubject = async (subject:Subject) => {
  const response = await api.post('subjects/', subject);
  return response;
};

export const getTeachers = async () => {
  const response = await api.get('/teachers');
  return response;
};

export const addTeacher = async (teacher:string) => {
  const response = await api.post('teachers/', teacher);
  return response;
};
