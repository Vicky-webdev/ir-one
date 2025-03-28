import React from "react";
import PropertyCard from "./PropertyCard";
import { Property } from "../types";

type MainContentProps = {
  properties: Property[];
  favorites: Set<string>;
  toggleFavorite: (id: string) => void;
};

const MainContent: React.FC<MainContentProps> = ({ properties, favorites, toggleFavorite }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {properties.map((property) => (
      <PropertyCard
        key={property.id}
        property={property}
        isFavorite={favorites.has(property.id)}
        toggleFavorite={toggleFavorite}
      />
    ))}
  </div>
);

export default MainContent;