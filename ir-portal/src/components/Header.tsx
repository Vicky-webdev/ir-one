import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants/navigation';
import { useSearch } from '../context/SearchContext';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

 
  const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-gray-900">LuxuryEstates</h1>
            <nav className="hidden md:flex space-x-6">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="!rounded-button text-gray-600 hover:text-gray-900 whitespace-nowrap"
                >
                  {item}
                </Link>
              ))}
              <Link
                to="/add-property"
                className="!rounded-button text-gray-600 hover:text-blue-600 whitespace-nowrap font-medium"
              >
                Add Property
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                className="w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            <button className="!rounded-button bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 whitespace-nowrap">
              <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;