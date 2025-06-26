import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-white shadow-sm border-b'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo/Brand */}
          <div className='flex-shrink-0'>
            <h1 className='text-xl font-bold text-gray-900'>System1</h1>
          </div>

          {/* Navigation */}
          <nav className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              <Link
                to='/'
                className='text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200'
              >
                Home
              </Link>
              <Link
                to='/about'
                className='text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200'
              >
                About
              </Link>
              <Link
                to='/private'
                className='text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200'
              >
                Private
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              type='button'
              className='bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className='md:hidden'>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50'>
          <Link
            to='/'
            className='text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200'
          >
            Home
          </Link>
          <Link
            to='/about'
            className='text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200'
          >
            About
          </Link>
          <Link
            to='/private'
            className='text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200'
          >
            Private
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
