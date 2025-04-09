import React, { useContext, useState } from 'react';
import { useFilteredProperties } from '../hooks/useFilteredProperties';
import { SearchContext } from '../context/SearchContext';
import PropertyCard from './PropertyCard';
import FilterPanel from '../components/FilterPanel';
import SortDropdown from '../components/SortDropdown';

const PropertiesPage: React.FC = () => {
  const properties = useFilteredProperties();
  const { resetFilters, setFilters } = useContext(SearchContext);

  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  // State for FilterPanel
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [sizeRange, setSizeRange] = useState<[number, number]>([0, 10000]);
  const [location, setLocation] = useState<string>('');

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setView('grid')}
            className={`px-4 py-2 rounded ${view === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
          >
            Grid View
          </button>
          <button
            onClick={() => setView('list')}
            className={`px-4 py-2 rounded ${view === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
          >
            List View
          </button>
        </div>
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
        <button
          onClick={resetFilters}
          className="mt-4 md:mt-0 px-4 py-2 bg-red-500 text-white rounded"
        >
          Reset Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <FilterPanel
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sizeRange={sizeRange}
            setSizeRange={setSizeRange}
            location={location}
            setLocation={setLocation}
            resetFilters={resetFilters}
          />
        </div>
        <div className="md:col-span-3">
          {properties.length === 0 ? (
            <p className="text-gray-600">No properties found.</p>
          ) : (
            <div
              className={`grid ${
                view === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'grid-cols-1 gap-4'
              }`}
            >
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  view={view}
                  isFavorite={favorites.includes(property.id)}
                  toggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;