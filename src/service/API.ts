import axios from 'axios';

const dev = () => {
  if (process.env.NODE_ENV === 'development') return true;
  return false;
};

const api = axios.create({
  baseURL: dev()
    ? 'http://localhost:8000/'
    : 'https://api-guia-minha-matricula.herokuapp.com',
});

export default api;
