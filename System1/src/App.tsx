import { AuthProvider } from 'react-oidc-context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivatePage from './pages/PrivatePage';
import PrivateRoute from './components/PrivateRoute';
import AboutPage from './pages/AboutPage';
import { onSigninCallback, userManager } from './configs/config';

// const oidcConfig = {
//   authority: 'http://localhost:8080/realms/Test/',
//   client_id: 'react-test',
//   redirect_uri: `${window.location.origin}${window.location.pathname}`,
//   post_logout_redirect_uri: window.location.origin,
//   response_type: 'code',
//   scope: 'openid profile email',
//   onSigninCallback: () =>
//     window.history.replaceState({}, document.title, window.location.pathname),
// };

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider
        userManager={userManager}
        onSigninCallback={onSigninCallback}
      >
        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route path='/about' element={<AboutPage />} />

          <Route path='/auth/about' element={<AboutPage />} />

          <Route
            path='/private'
            element={
              <PrivateRoute>
                <PrivatePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
