import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {getToken} from './token';

const SERVER_BASE_URL = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: SERVER_BASE_URL,
    timeout: REQUEST_TIMEOUT
  });

  instance.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  return instance;
};
