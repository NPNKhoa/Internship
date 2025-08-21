import React, { type JSX } from 'react';
import { hasAuthParams, useAuth } from 'react-oidc-context';
import LoadingPage from '../pages/LoadingPage';
import LoginContainer from './LoginContainer';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  const handleSignIn = React.useCallback(() => {
    if (
      !(
        hasAuthParams() ||
        auth.isAuthenticated ||
        auth.activeNavigator ||
        auth.isLoading
      )
    ) {
      try {
        console.log('Redirecting to signin...');
        void auth.signinRedirect();
      } catch (error) {
        console.log('Error during signin redirect:', error);
      }
    }
  }, [auth]);

  return auth.isLoading ? (
    <LoadingPage />
  ) : auth.isAuthenticated ? (
    children
  ) : (
    <LoginContainer handleLogin={handleSignIn} />
  );
};

export default PrivateRoute;
