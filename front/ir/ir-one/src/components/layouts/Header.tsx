import React from 'react';
import { Menu, X } from 'lucide-react';
 
// import FlyoutMenu from '../navigation/FlyoutMenu';
import { useAuthModal } from '../../context/AuthModalContext';
import SearchBar from '../SearchFilterBar';
 
const Header: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // You can later redirect like: router.push(`/search?query=${query}`);
  };
  const [isOpen, setIsOpen] = React.useState(false);
  const modalContext = useAuthModal();
 
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-blue-700">RealtyHub</div>
          


          <div className="hidden md:flex items-center gap-8">
            {/* <FlyoutMenu /> */}
           
            <div className="flex items-center gap-4">
              <button
                onClick={modalContext?.openLogin}
                className="text-gray-700 hover:text-blue-600"
              >
                Login
              </button>
              <button
                onClick={modalContext?.openRegister}
                className="text-gray-700 hover:text-blue-600"
              >
                Register
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                Post Property FREE
              </button>
            
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow">
          <a href="/" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="/buy" className="block text-gray-700 hover:text-blue-600">Buy Property</a>
          <a href="/projects" className="block text-gray-700 hover:text-blue-600">New Projects</a>
          <a href="/localities" className="block text-gray-700 hover:text-blue-600">Localities</a>
          <hr />
          <button
            onClick={modalContext?.openLogin}
            className="block w-full text-left text-gray-700 hover:text-blue-600"
          >
            Login
          </button>
          <button
            onClick={modalContext?.openRegister}
            className="block w-full text-left text-gray-700 hover:text-blue-600"
          >
            Register
          </button>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">
            Post Property FREE
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
