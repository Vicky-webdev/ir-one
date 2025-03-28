import React, { useState } from "react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import RecommendedProjects from "../components/RecommendedProjects";
import CityCategories from "../components/CityCategories";
import PropertyGrid from "../components/PropertyGrid";
import UpcomingProjects from "../components/UpcomingProjects";
import PostedBy from "../components/PostedBy";
import PriceTrendFooter from "../components/PriceTrendFooter";
import LatestArticles from "../components/LatestArticles";
import FilterPanel from "../components/FilterPanel";
import ViewToggle from "../components/ViewToggle";
import PopularBuilders from "../components/PopularBuilders";
import { properties } from "../data/properties";
import { Property } from "../types";

const Home: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (propertyId: string) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = new Set(prevFavorites);
      if (updatedFavorites.has(propertyId)) {
        updatedFavorites.delete(propertyId);
      } else {
        updatedFavorites.add(propertyId);
      }
      return updatedFavorites;
    });
  };

  const [selectedView, setSelectedView] = useState<"grid" | "list" | "map">("grid");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);
  const [sizeRange, setSizeRange] = useState<[number, number]>([0, 5000]);
  const [location, setLocation] = useState<string>("");

  const filteredProperties: Property[] = properties.filter(
    (property) =>
      property.price >= priceRange[0] &&
      property.price <= priceRange[1] &&
      property.sqft >= sizeRange[0] &&
      property.sqft <= sizeRange[1] &&
      (location === "" || property.location.toLowerCase().includes(location.toLowerCase()))
  );

  return (
    <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
      <HeroBanner />
      <RecommendedProjects />
      <CityCategories />

      <div className="mb-6">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setShowFilters((prev) => !prev)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {showFilters && (
        <div className="mb-6 px-4">
          <FilterPanel
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sizeRange={sizeRange}
            setSizeRange={setSizeRange}
            location={location}
            setLocation={setLocation}
            favorites={favorites}
            setFavorites={setFavorites}
            resetFilters={() => {
              setPriceRange([0, 5000000]);
              setSizeRange([0, 5000]);
              setLocation("");
              setFavorites(new Set());
            }}
          />
        </div>
      )}

      <ViewToggle selectedView={selectedView} onChange={setSelectedView} />

      <PropertyGrid
        properties={filteredProperties}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        sizeRange={sizeRange}
        setSizeRange={setSizeRange}
        location={location}
        setLocation={setLocation}
        selectedView={selectedView}
        setSelectedView={setSelectedView}
        favorites={favorites}
        setFavorites={setFavorites}
        toggleFavorite={toggleFavorite}
      />

      <UpcomingProjects />
      <PostedBy />
      <PriceTrendFooter />
      <PopularBuilders />
      <LatestArticles />
    </Layout>
  );
};

export default Home;
