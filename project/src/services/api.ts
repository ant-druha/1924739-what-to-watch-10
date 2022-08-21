import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {getToken} from './token';
import {StatusCodes} from 'http-status-codes';
import {toast} from 'react-toastify';


const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

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

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.warn(error.response.data.error);
      } else if (error.message) {
        toast.warn(error.message);
      }

      throw error;
    }
  );

  return instance;
};
