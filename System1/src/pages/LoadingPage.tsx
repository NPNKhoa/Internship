import { useAuth } from 'react-oidc-context';

const LoadingPage = () => {
  const auth = useAuth();

  if (!auth.isLoading) {
    return null;
  }

  return (
    <div className='fixed inset-0 bg-white flex items-center justify-center z-50'>
      {/* Simple spinner */}
      <div className='text-center space-y-6'>
        <div className='relative'>
          <div className='w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mx-auto'></div>
        </div>

        {/* Loading text */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold text-gray-800'>Đang tải...</h2>
          <p className='text-gray-500 text-sm'>Vui lòng đợi trong giây lát</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
