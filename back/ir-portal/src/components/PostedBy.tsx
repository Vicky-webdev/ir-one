import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faHandshake,
  faUserTie,
  faHouseUser,
  faBuilding,
  faCity,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

const posters = [
  { type: 'Dealer', count: '2,450+ Properties', icon: faHandshake },
  { type: 'Agent', count: '3,200+ Properties', icon: faUserTie },
  { type: 'Owner', count: '1,800+ Properties', icon: faHouseUser },
  { type: 'Builder', count: '950+ Properties', icon: faBuilding },
  { type: 'Developer', count: '750+ Properties', icon: faCity },
];

const PostedBy: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <FontAwesomeIcon icon={faUsers} className="text-3xl text-blue-600 mr-4" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Properties Posted By</h2>
          <p className="text-gray-600">Find properties from verified sources</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {posters.map((poster) => (
          <div
            key={poster.type}
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <FontAwesomeIcon icon={poster.icon} className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{poster.type}</h3>
              <p className="text-sm text-gray-600 mt-1">{poster.count}</p>
              <FontAwesomeIcon icon={faArrowRight} className="text-blue-600 mt-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostedBy;
