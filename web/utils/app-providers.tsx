import * as React from 'react';
import { AuthProvider } from '../context/auth-context';

export function AppProviders({children}) {
  return (
    <AuthProvider>{children}</AuthProvider>
  );
}
