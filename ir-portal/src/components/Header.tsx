import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants/navigation';

interface HeaderProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  centered?: boolean; // Passed from Layout/Page
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery, centered = false }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className={`w-full px-4 py-4 ${centered ? 'text-center' : 'max-w-7xl mx-auto'}`}>
        <div className={`flex ${centered ? 'flex-col items-center' : 'items-center justify-between'}`}>
          <div className={`flex ${centered ? 'flex-col items-center space-y-4' : 'items-center space-x-8'}`}>
            <h1 className="text-2xl font-bold text-gray-900">LuxuryEstates</h1>
            <nav className={`${centered ? 'flex space-x-4 justify-center' : 'hidden md:flex space-x-6'}`}>
              {NAV_LINKS.map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
                >
                  {item}
                </Link>
              ))}
              <Link
                to="/add-property"
                className="text-gray-600 hover:text-blue-600 whitespace-nowrap font-medium"
              >
                Add Property
              </Link>
            </nav>
          </div>

          <div className={`flex items-center space-x-4 mt-4 ${centered ? 'justify-center' : ''}`}>
            <div className="relative">
              <input
                type="text"
                className="w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery?.(e.target.value)}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 whitespace-nowrap">
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
