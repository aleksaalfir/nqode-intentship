import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { isTokenExpired } from 'services/authService';

const axios = Axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL });

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = localStorage.getItem('token');
  if (token) {
    if (isTokenExpired()) {
      localStorage.removeItem('token');
      window.location.replace('/login');
    }
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

axios.interceptors.request.use(onRequest, onRequestError);

export default axios;
