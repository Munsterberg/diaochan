import * as React from 'react';
import { client } from '../utils/fetcher';
import * as auth from '../utils/auth';

type AuthContext = {
  login: (username: string, password: string) => void;
};

const AuthContext = React.createContext<AuthContext>(null);

function AuthProvider(props) {
  // TODO: loader for user data here

  const login = (username, password) => {
    client(`auth/login`, {
      method: 'POST',
      body: {
        username,
        password
      }
    }).then(({ access_token: token }) => auth.login(token));
  };

  const value = React.useMemo(() => ({
    login,
  }), [login])

  return (
    <AuthContext.Provider value={value} {...props} />
  )
}

function useAuth() {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuth }
