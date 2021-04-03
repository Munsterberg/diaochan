import { localStorageKey } from './constants';

// TODO: improve this lazy boi
type Config = {
  method: string
  headers: any;
  body?: any;
}

export function client(endpoint, { body, method, ...customConfig}) {
  const headers = {'content-type': 'application/json'};

  const config: Config = {
    method: method ? method : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  }

  if (body) {
    config.body = JSON.stringify(body);
  }

  return window.fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, config)
    .then(async response => {
      if (response.status === 401) {
        logout();
        return;
      }

      if (response.ok) {
        return await response.json();
      } else {
        const errorMessage = await response.text();
        return Promise.reject(new Error(errorMessage));
      }
    });
}

function logout()  {
  window.localStorage.removeItem(localStorageKey);
}

