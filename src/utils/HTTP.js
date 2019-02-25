import axios from 'axios';

export const API = 'http://demo4507124.mockable.io/';

const AxiosInstance = axios.create({
  baseURL: API,
  timeout: 1000,
  headers: {
    'X-Access-Token':
      'ki494034jkjdfsi49e8943iufkljfdkj4oi3uu498usajhasdfoi4jkjfi434'
  }
});

export default AxiosInstance;
