import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import CityCategories from "./components/CityCategories";
import HeroBanner from "./components/HeroBanner";
import RecommendedProjects from "./components/RecommendedProjects";
import PropertyGrid from "./components/PropertyGrid";
import PriceTrendFooter from "./components/PriceTrendFooter";
import PopularBuilders from "./components/PopularBuilders";
import BhkChoices from "./components/BhkChoices";
import PostedBy from "./components/PostedBy";
import UpcomingProjects from "./components/UpcomingProjects";
import LatestArticles from "./components/LatestArticles";

import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faList,
  faMapMarkerAlt,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

const App: React.FC = () => {
  const [selectedView, setSelectedView] = useState<"grid" | "list" | "map">(
    "grid"
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const properties = [
    {
      id: "1",
      title: "Modern Luxury Villa",
      price: 1250000,
      location: "Beverly Hills, CA",
      beds: 5,
      baths: 4,
      sqft: 4200,
      image:
        "https://public.readdy.ai/ai/img_res/ab05db99e6d217931528167e9de7f73d.jpg",
    },
    {
      id: "2",
      title: "Downtown Penthouse",
      price: 890000,
      location: "Manhattan, NY",
      beds: 3,
      baths: 2,
      sqft: 2100,
      image:
        "https://public.readdy.ai/ai/img_res/d0ec08e4c3d8d2888a0d447492d46626.jpg",
    },
    {
      id: "3",
      title: "Oceanfront Estate",
      price: 3500000,
      location: "Malibu, CA",
      beds: 6,
      baths: 5,
      sqft: 5800,
      image:
        "https://public.readdy.ai/ai/img_res/543c843e6c0820945aab873d46472f98.jpg",
    },
  ];

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const updated = new Set(prev);
      updated.has(id) ? updated.delete(id) : updated.add(id);
      return updated;
    });
  };

  const filteredProperties = properties.filter(
    (p) =>
      p.price >= priceRange[0] &&
      p.price <= priceRange[1] &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* View Toggle & Filter Button */}
        <div className="flex justify-between items-center mb-6">
          <div className="space-x-2 flex">
            <button
              className={`text-sm px-4 py-2 rounded flex items-center gap-2 ${
                selectedView === "grid"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 border"
              }`}
              onClick={() => setSelectedView("grid")}
            >
              <FontAwesomeIcon icon={faThLarge} />
              grid
            </button>
            <button
              className={`text-sm px-4 py-2 rounded flex items-center gap-2 ${
                selectedView === "list"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 border"
              }`}
              onClick={() => setSelectedView("list")}
            >
              <FontAwesomeIcon icon={faList} />
              list
            </button>
            <button
              className={`text-sm px-4 py-2 rounded flex items-center gap-2 ${
                selectedView === "map"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 border"
              }`}
              onClick={() => setSelectedView("map")}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              map
            </button>
          </div>

          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className="text-sm px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faFilter} />
            filters
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price range
                </label>
                <input
                  type="range"
                  min="0"
                  max="5000000"
                  step="50000"
                  className="w-full"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                />
                <div className="text-xs text-gray-600 mt-1">
                  ${priceRange[0].toLocaleString()} - $
                  {priceRange[1].toLocaleString()}
                </div>
              </div>

              {/* Add more filters if needed */}
            </div>
          </div>
        )}
        <HeroBanner />
        <RecommendedProjects />

        <CityCategories />

        {/* Property Grid */}
        <PropertyGrid
          properties={filteredProperties}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
        <PopularBuilders />
        <BhkChoices />
        <PostedBy />
        <UpcomingProjects />
        <LatestArticles />

        <PriceTrendFooter />
        <Footer />
      </main>
    </div>
  );
};

export default App;
