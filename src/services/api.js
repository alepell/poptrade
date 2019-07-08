import axios from 'axios';

const api = axios.create({
  baseURL: 'https://charts-pesadao.herokuapp.com',
});

export default api;
