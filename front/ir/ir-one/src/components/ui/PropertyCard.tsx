// components/ui/PropertyCard.tsx
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export interface Property {
  id: number;
  title: string;
  location: string;
  propertyType: string;
  bhk: string;
  budget: number;
  area: number;
  image: string;
  badge?: string;
}

const badgeColorMap: Record<string, string> = {
  Hot: "bg-red-500",
  "New Launch": "bg-green-600",
  Active: "bg-blue-500",
  "Sold Out": "bg-gray-700",
  "Limited Units": "bg-yellow-400",
};

const PropertyCard = ({
  property,
  isFavorite,
  onToggle,
}: {
  property: Property;
  isFavorite: boolean;
  onToggle: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 cursor-pointer"
      onClick={() => navigate(`/property/${property.id}`)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {property.badge && (
        <span
          className={`absolute top-2 left-2 px-2 py-1 text-xs text-white font-medium rounded ${
            badgeColorMap[property.badge] || "bg-gray-500"
          }`}
        >
          {property.badge}
        </span>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent navigation
          onToggle();
        }}
        className="absolute top-2 right-2 text-lg z-10"
      >
        <FaHeart className={isFavorite ? "text-red-500" : "text-gray-400"} />
      </button>

      <img
        src={property.image}
        alt={property.title}
        className="w-full h-36 object-cover rounded-t-xl"
      />
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-base font-semibold text-gray-800">
          {property.title}
        </h3>
        <p className="text-sm text-gray-500">{property.location}</p>
        <p className="text-sm text-gray-600">Type: {property.propertyType}</p>
        <div className="flex justify-between items-center pt-4">
          <span className="text-sm font-medium text-blue-600">
            {property.bhk}
          </span>
          <span className="text-base font-semibold text-green-700">
            ₹{property.budget.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
