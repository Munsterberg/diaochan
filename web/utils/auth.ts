import { client } from '../utils/fetcher';
import { localStorageKey } from './constants';

type AuthDto = {
  username: string;
  email?: string;
  password: string;
}

export function login(authDto: AuthDto) {
  const { username, password } = authDto;
  client(`auth/login`, {
    method: 'POST',
    body: {
      username,
      password,
    },
  }).then(({ access_token: token }) => {
    setLocalStorageKey(token);
  });
}

export function register(authDto: AuthDto) {
  const { username, email, password } = authDto;
  return client(`auth/register`, {
    method: 'POST',
    body: {
      username,
      email,
      password,
    },
  });
}

export function logout() {
  removeLocalStorageKey();
}

function setLocalStorageKey(token: string) {
  window.localStorage.setItem(localStorageKey, token);
}

function removeLocalStorageKey() {
  window.localStorage.removeItem(localStorageKey);
}

export function getLocalStorageKey() {
  return window.localStorage.getItem(localStorageKey);
}
