// import  { useState, useEffect } from 'react';
import HeroSection from '../components/ui/HeroSection';
// import SearchFilterBar from '../components/home/SearchFilterBar';
// import PropertyList from '../components/PropertyList';
// import mockProperties from '../data/mockProperties';
import bannerImage from '../assets/images/1.jpg';
import FeaturesSection from '../components/home/FeaturesSection';
import FeaturedListings from '../components/home/FeaturedListings';
import SearchBar from '../components/SearchFilterBar/index';

// interface Property {
//   id: number;
//   title: string;
//   location: string;
//   propertyType: string;
//   bhk: string;
//   budget: number;
//   area: number;
// }

const HomePage = () => {

  const handleSearch = (query: string) => {
    // Navigate or filter results
    console.log('Searching for:', query);
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
      <SearchBar onSearch={handleSearch} />
      </div>

      {/* <PropertyList properties={filteredProperties} /> */}

      <FeaturesSection/>
      <FeaturedListings></FeaturedListings>
    </div>
  );
};

export default HomePage;