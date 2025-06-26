import Header from '../components/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <div className='px-4 py-6 sm:px-0'>
          <div className='border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center mt-8'>
            <h1 className='text-5xl text-blue-500 font-bold'>
              This is Home page
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
