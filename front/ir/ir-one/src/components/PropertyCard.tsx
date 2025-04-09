import React from 'react';
import { motion } from 'framer-motion';

interface PropertyCardProps {
  title: string;
  location: string;
  propertyType: string;
  bhk: string;
  budget: number;
  area: number;
  image?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ title, location, propertyType, bhk, budget, area, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-100 rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden bg-white"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-3xl"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1 line-clamp-2">{title}</h2>
        <p className="text-gray-600 text-sm font-medium mb-1">
          {location} • {propertyType} • {bhk} BHK
        </p>
        <p className="text-gray-900 font-semibold text-sm">
          ₹{budget.toLocaleString()} • {area} sq.ft.
        </p>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
