const AUTH_TOKEN_KEY_NAME = 'what-to-watch-token';

export type Token = string;

export const getToken = (): Token => localStorage.getItem(AUTH_TOKEN_KEY_NAME) ?? '';

export const saveToken = (token: Token) => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
