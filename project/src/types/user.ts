import {AuthorizationStatus} from '../const';

export type Authorization = keyof typeof AuthorizationStatus;

export type AuthData = {
  login: string,
  password: string
};
export type UserData = {
  avatarUrl: string
  email: string
  id: number
  name: string
  token: string
};
