import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FilterInput from "./FilterInput";
import FilterDropdown from "./FilterDropdown";
import BudgetRange from "./BudgetRange";
import BHKSelector from "./BHKSelector";
import AreaRange from "./AreaRange";

interface Props {
  onSearch: (filters: any) => void;
}

const SearchFilterBar: React.FC<Props> = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    budgetMin: "",
    budgetMax: "",
    bhk: "",
    areaMin: "",
    areaMax: "",
    sortBy: ""
  });

  const [isOpen, setIsOpen] = useState(true);

  const handleFilterChange = (key: string, value: string | number) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    onSearch(updatedFilters); // Instant filtering
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 sticky top-0 z-20">

      {/* Mobile Toggle */}
      <div className="flex justify-between items-center mb-2 sm:hidden">
        <h2 className="font-semibold text-lg">Filters</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm px-3 py-1 border rounded"
        >
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>

      {/* Filter Inputs */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="filters"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

              <FilterInput
                label="Location"
                placeholder="Enter location..."
                value={filters.location}
                onChange={(val) => handleFilterChange("location", val)}
              />

              <FilterDropdown
                label="Property Type"
                options={["Plot", "Villa", "Apartment"]}
                value={filters.propertyType}
                onChange={(val) => handleFilterChange("propertyType", val)}
              />

              <BudgetRange
                min={filters.budgetMin}
                max={filters.budgetMax}
                onMinChange={(val) => handleFilterChange("budgetMin", val)}
                onMaxChange={(val) => handleFilterChange("budgetMax", val)}
              />

              <BHKSelector
                value={filters.bhk}
                onChange={(val) => handleFilterChange("bhk", val)}
              />

              <AreaRange
                min={filters.areaMin}
                max={filters.areaMax}
                onMinChange={(val) => handleFilterChange("areaMin", val)}
                onMaxChange={(val) => handleFilterChange("areaMax", val)}
              />


            <FilterDropdown
            label="Sort By"
            options={["Price: Low to High", "Price: High to Low"]}
            value={filters.sortBy}
            onChange={(val) => handleFilterChange("sortBy", val)}
            />

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchFilterBar;
