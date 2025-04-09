import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBed } from '@fortawesome/free-solid-svg-icons';

const bhkOptions = [
  { type: '1 RK/1 BHK', count: '320+ Properties' },
  { type: '2 BHK', count: '1,600+ Properties' },
  { type: '3 BHK', count: '1,200+ Properties' },
  { type: '4 BHK', count: '450+ Properties' },
  { type: '5+ BHK', count: '180+ Properties' },
];

const BhkChoices: React.FC = () => {
  return (
    <div className="mb-12 bg-orange-50 rounded-xl p-8">
      <div className="flex items-center mb-6">
        <FontAwesomeIcon icon={faHome} className="text-3xl text-blue-600 mr-4" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">BHK choice in mind?</h2>
          <p className="text-gray-600">Browse by no. of bedrooms in the house</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {bhkOptions.map((bhk) => (
          <div
            key={bhk.type}
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{bhk.type}</h3>
                <p className="text-sm text-gray-600 mt-1">{bhk.count}</p>
              </div>
              <FontAwesomeIcon icon={faBed} className="text-blue-600 text-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BhkChoices;
