import { UserManager, WebStorageStateStore } from 'oidc-client-ts';

const realmName: string = 'CUSC'; // The name of the realm
const clientId: string = 'cusc-system'; // The client ID for the application

export const userManager = new UserManager({
  authority: `http://localhost:8080/realms/${realmName}/`,
  client_id: clientId,
  redirect_uri: `${window.location.origin}${window.location.pathname}`,
  post_logout_redirect_uri: window.location.origin,
  userStore: new WebStorageStateStore({ store: window.sessionStorage }),
});

export const onSigninCallback = () => {
  window.history.replaceState({}, document.title, window.location.pathname);
};
