import React from 'react';
import Header from '../components/Header';
import { useAuth } from 'react-oidc-context';

const PrivatePage = () => {
  const auth = useAuth();

  const handleSignOut = React.useCallback(() => {
    void auth.signoutRedirect();
    void auth.removeUser();
  }, [auth]);

  console.log(auth);

  return (
    <div>
      <Header />
      <main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <div className='px-4 py-6 sm:px-0'>
          <div className='border-4 border-dashed border-gray-200 rounded-lg h-96 flex flex-col items-center justify-center mt-8'>
            <h1 className='text-5xl text-blue-500 font-bold mb-4'>
              This is Private page
            </h1>
            <p className='text-2xl text-gray-700 block mb-2'>
              Xin chào,{' '}
              {`${auth?.user?.profile?.given_name} ${auth?.user?.profile?.family_name}`}{' '}
              {void console.log(auth)}{' '}
            </p>
            <button
              className='bg-blue-500 hover:cursor-pointer mt-2 px-4 py-2 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300'
              onClick={handleSignOut}
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivatePage;
