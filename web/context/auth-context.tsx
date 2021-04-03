import * as React from 'react';
import { client } from '../utils/fetcher';

type AuthContext = {
  register: (username: string, password: string) => void;
};

const AuthContext = React.createContext<AuthContext>(null);

function AuthProvider(props) {
  // TODO: loader for user data here

  const register = (username, password) => {
    return client(`auth/login`, {
      method: 'POST',
      body: {
        username,
        password
      }
    })
  };

  return (
    <AuthContext.Provider value={{register}} {...props} />
  )
}

function useAuth() {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuth }
