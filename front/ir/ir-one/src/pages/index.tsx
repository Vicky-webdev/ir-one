import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HeroSection from '../components/ui/HeroSection';
import SearchBar from '../components/SearchFilterBar';
import FeaturesSection from '../components/home/FeaturesSection';
import FeaturedListings from '../components/home/FeaturedListings';

import bannerImage from '../assets/images/1.jpg';
import propertyData from '../data/mockProperties.json';

// Define the property type
interface Property {
  id: number;
  title: string;
  location: string;
  propertyType: string;
  bhk: string;
  budget: number;
  area: number;
  image: string;
}

const HomePage = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filtered, setFiltered] = useState<Property[]>([]);
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadedProperties = propertyData as Property[];
    setProperties(loadedProperties);
    setFiltered(loadedProperties);
  }, []);

  const handleSearch = (filters: {
    location: string;
    propertyType: string;
    bhk: string;
    minBudget: string;
    maxBudget: string;
  }) => {
    const searchParams = new URLSearchParams();

    if (filters.location) searchParams.append('location', filters.location);
    if (filters.propertyType) searchParams.append('propertyType', filters.propertyType);
    if (filters.bhk) searchParams.append('bhk', filters.bhk);
    if (filters.minBudget) searchParams.append('minBudget', filters.minBudget);
    if (filters.maxBudget) searchParams.append('maxBudget', filters.maxBudget);

    navigate(`/results?${searchParams.toString()}`);
  };

  const handleSubmitSearch = () => {
    if (query) {
      navigate(`/results?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <HeroSection
        backgroundImage={bannerImage}
        title="Find Your Dream Property Today"
        subtitle="Buy, rent, or list your property hassle-free across India"
        showSearchBar
        ctaButtons={[
          { label: 'Search Properties', href: '/buy' },
          { label: 'Post Property FREE', href: '/post', variant: 'secondary' },
        ]}
      />

      <div className="my-6">
        <SearchBar
          query={query}
          onSearch={handleSearch}
          onSubmit={handleSubmitSearch}
          suggestions={filtered.slice(0, 5)}
        />
      </div>

      {/* Listing preview grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filtered.map((property) => (
          <div
            key={property.id}
            className="border rounded-lg shadow hover:shadow-md transition p-4"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-semibold">{property.title}</h3>
            <p className="text-gray-600">{property.location} - {property.bhk}</p>
            <p className="text-indigo-600 font-bold mt-1">
              ₹ {property.budget.toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      <FeaturesSection />
      <FeaturedListings />
    </div>
  );
};

export default HomePage;
