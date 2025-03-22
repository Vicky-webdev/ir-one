import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faMapMarkerAlt,
  faBath,
  faBed,
  faRulerCombined,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
}

interface GridProps {
  properties: Property[];
  favorites: Set<string>;
  toggleFavorite: (id: string) => void;
}

const PropertyGrid: React.FC<GridProps> = ({
  properties,
  favorites,
  toggleFavorite,
}) => {
  return (
    <div className="mb-12">
      {/* 🔽 Title (centered or left-aligned) */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">
        Featured Properties
      </h2>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => toggleFavorite(property.id)}
                className="!rounded-button absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg cursor-pointer whitespace-nowrap"
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`text-xl ${
                    favorites.has(property.id) ? 'text-red-500' : 'text-gray-400'
                  }`}
                />
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {property.title}
              </h3>
              <p className="text-2xl font-bold text-blue-600 mt-2">
                ${property.price.toLocaleString()}
              </p>
              <p className="text-gray-600 mt-1 flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                {property.location}
              </p>

              <div className="flex items-center space-x-4 mt-4 text-gray-600">
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faBed} className="mr-2" />
                  {property.beds} beds
                </span>
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faBath} className="mr-2" />
                  {property.baths} baths
                </span>
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faRulerCombined} className="mr-2" />
                  {property.sqft} sqft
                </span>
              </div>

              <div className="flex space-x-2 mt-4">
                <button className="!rounded-button flex-1 bg-blue-600 text-white py-2 hover:bg-blue-700 whitespace-nowrap">
                  View Details
                </button>
                <button className="!rounded-button px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 whitespace-nowrap">
                  <FontAwesomeIcon icon={faPhone} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;
