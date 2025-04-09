import  { useState, useEffect } from 'react';
import HeroSection from '../components/ui/HeroSection';
import SearchFilterBar from '../components/home/SearchFilterBar';
import PropertyList from '../components/PropertyList';
import mockProperties from '../data/mockProperties';
import bannerImage from '../assets/images/1.jpg';
import FeaturesSection from '../components/home/FeaturesSection';
import FeaturedListings from '../components/home/FeaturedListings';

interface Property {
  id: number;
  title: string;
  location: string;
  propertyType: string;
  bhk: string;
  budget: number;
  area: number;
}

const HomePage = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(mockProperties);
  const [filters, setFilters] = useState<any>({});

  // Debounce the filtering
  useEffect(() => {
    const timeout = setTimeout(() => {
      let result = [...mockProperties];

      if (filters.location) {
        result = result.filter(p => p.location.toLowerCase().includes(filters.location.toLowerCase()));
      }
      if (filters.propertyType) {
        result = result.filter(p => p.propertyType === filters.propertyType);
      }
      if (filters.bhk) {
        result = result.filter(p => p.bhk === filters.bhk);
      }
      if (filters.budgetMin) {
        result = result.filter(p => p.budget >= parseInt(filters.budgetMin));
      }
      if (filters.budgetMax) {
        result = result.filter(p => p.budget <= parseInt(filters.budgetMax));
      }
      if (filters.areaMin) {
        result = result.filter(p => p.area >= parseInt(filters.areaMin));
      }
      if (filters.areaMax) {
        result = result.filter(p => p.area <= parseInt(filters.areaMax));
      }

      // Sorting
      if (filters.sortBy) {
        if (filters.sortBy === 'priceLowHigh') {
          result.sort((a, b) => a.budget - b.budget);
        } else if (filters.sortBy === 'priceHighLow') {
          result.sort((a, b) => b.budget - a.budget);
        } else if (filters.sortBy === 'areaHighLow') {
          result.sort((a, b) => b.area - a.area);
        } else if (filters.sortBy === 'newest') {
          result.sort((a, b) => b.id - a.id);
        }
      }

      setFilteredProperties(result);
    }, 300); // 300ms debounce

    return () => clearTimeout(timeout);
  }, [filters]);

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
        <SearchFilterBar onSearch={setFilters} />
      </div>

      {/* <PropertyList properties={filteredProperties} /> */}

      <FeaturesSection/>
      <FeaturedListings></FeaturedListings>
    </div>
  );
};

export default HomePage;