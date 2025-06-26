import React, { type JSX } from 'react';
import { hasAuthParams, useAuth } from 'react-oidc-context';
import LoadingPage from '../pages/LoadingPage';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  const [hasTriedSignin, setHasTriedSignin] = React.useState(false);

  React.useEffect(() => {
    if (
      !(
        hasAuthParams() ||
        auth.isAuthenticated ||
        auth.activeNavigator ||
        auth.isLoading ||
        hasTriedSignin
      )
    ) {
      try {
        console.log('Redirecting to signin...');
        void auth.signinRedirect();
        setHasTriedSignin(true);
        console.log('Success...');
      } catch (error) {
        console.log('Error during signin redirect:', error);
      }
    }
  }, [auth, hasTriedSignin]);

  return auth.isLoading ? (
    <LoadingPage />
  ) : auth.isAuthenticated ? (
    children
  ) : null;
};

export default PrivateRoute;
