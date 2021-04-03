import * as React from 'react';
import { client } from '../utils/fetcher';
import * as auth from '../utils/auth';

type AuthContext = {
  login: (username: string, password: string) => void;
  register: (username: string, email: string, password: string) => void;
};

const AuthContext = React.createContext<AuthContext>(null);

function AuthProvider(props) {
  // TODO: loader for user data here

  const login = (username: string, password: string) => {
    client(`auth/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    }).then(({ access_token: token }) => auth.login(token));
  };

  const register = (username: string, email: string, password: string) => {
    client(`auth/register`, {
      method: 'POST',
      body: {
        username,
        email,
        password,
      },
    }).then(console.log);
  };

  const value = React.useMemo(
    () => ({
      login,
      register,
    }),
    [login]
  );

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuth };
