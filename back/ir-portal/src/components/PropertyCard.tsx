import React from "react";
import { Property } from "../types";

interface Props {
  property: Property;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
  view: 'grid' | 'list';
}

const PropertyCard: React.FC<Props> = ({ property, view,isFavorite, toggleFavorite }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{property.title}</h3>
          <button onClick={() => toggleFavorite(property.id)} className="text-red-500">
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <p className="text-sm text-gray-600">{property.location}</p>
        <p className="mt-2 font-semibold text-blue-600">${property.price.toLocaleString()}</p>
        <p className="text-sm text-gray-500">
          {property.beds} Beds • {property.baths} Baths • {property.sqft} Sqft
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;