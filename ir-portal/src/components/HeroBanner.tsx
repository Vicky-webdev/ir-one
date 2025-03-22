import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative h-[600px] rounded-xl overflow-hidden mb-16">
      <img
        src="https://public.readdy.ai/ai/img_res/ac2b5f920bdd4f705dc29f79ae8baa23.jpg"
        alt="Luxury Real Estate"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      <div className="relative h-full max-w-7xl mx-auto flex items-center">
        <div className="w-1/2 text-white p-8">
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-xl mb-8">Discover luxury properties in prime locations</p>
          <div className="bg-white/95 p-6 rounded-xl backdrop-blur">
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Location */}
              <div>
                <label className="block text-gray-700 text-sm mb-2">Location</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700"
                    placeholder="Enter location"
                  />
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-gray-700 text-sm mb-2">Property Type</label>
                <div className="relative">
                  <select className="w-full px-4 py-2 border rounded-lg text-gray-700 appearance-none">
                    <option>All Properties</option>
                    <option>Apartments</option>
                    <option>Villas</option>
                    <option>Penthouses</option>
                  </select>
                  <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-gray-700 text-sm mb-2">Budget</label>
                <div className="relative">
                  <select className="w-full px-4 py-2 border rounded-lg text-gray-700 appearance-none">
                    <option>All Budgets</option>
                    <option>$500k - $1M</option>
                    <option>$1M - $2M</option>
                    <option>$2M+</option>
                  </select>
                  <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="block text-gray-700 text-sm mb-2">Property Status</label>
                <div className="relative">
                  <select className="w-full px-4 py-2 border rounded-lg text-gray-700 appearance-none">
                    <option>Ready to Move</option>
                    <option>Under Construction</option>
                    <option>Pre-Launch</option>
                  </select>
                  <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            <button className="!rounded-button w-full bg-blue-600 text-white py-3 hover:bg-blue-700 whitespace-nowrap">
              <FontAwesomeIcon icon={faSearch} className="mr-2" />
              Search Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
