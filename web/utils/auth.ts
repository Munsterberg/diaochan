import { localStorageKey } from './constants';

export function login(token) {
  setLocalStorageKey(token);
}

export function logout() {
  removeLocalStorageKey();
}

function setLocalStorageKey(token) {
  window.localStorage.setItem(localStorageKey, token);
}

function removeLocalStorageKey() {
  window.localStorage.removeItem(localStorageKey);
}

export function getLocalStorageKey() {
  return window.localStorage.getItem(localStorageKey);
}
