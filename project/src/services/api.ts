import axios, {AxiosInstance} from 'axios';

const SERVER_BASE_URL = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => axios.create({
  baseURL: SERVER_BASE_URL,
  timeout: REQUEST_TIMEOUT
});
