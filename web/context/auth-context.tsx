import * as React from 'react';
import * as authUtils from '../utils/auth';

type AuthContext = {
  login: (username: string, password: string) => Promise<any>;
  register: (username: string, email: string, password: string) => void;
};

const AuthContext = React.createContext<AuthContext>(null);

function AuthProvider(props) {
  // TODO: loader for user data here

  const login = (username: string, password: string) => {
    return authUtils.login({ username, password });
  };

  const register = (username: string, email: string, password: string) => {
    return authUtils.register({ username, email, password });
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
