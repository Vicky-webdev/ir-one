// src/components/PropertyList.tsx
import React from "react";

type Property = {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
};

type Props = {
  properties: Property[];
};

const PropertyList: React.FC<Props> = ({ properties }) => {
  return (
    <div className="space-y-6">
      {properties.map((property) => (
        <div
          key={property.id}
          className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-md bg-white"
        >
          <img
            src={property.image}
            alt={property.title}
            className="w-full md:w-64 h-48 object-cover"
          />
          <div className="p-4 flex-1">
            <h3 className="text-lg font-semibold">{property.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{property.location}</p>
            <p className="font-bold text-blue-600 mb-1">
              ₹{property.price.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">
              {property.beds} Beds • {property.baths} Baths • {property.sqft} sqft
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
