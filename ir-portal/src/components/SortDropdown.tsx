// src/components/SortDropdown.tsx
import React from 'react';

interface SortDropdownProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ sortBy, setSortBy }) => {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="border rounded px-3 py-2 text-sm"
    >
      <option value="">Default</option>
      <option value="priceLowHigh">Price: Low to High</option>
      <option value="priceHighLow">Price: High to Low</option>
      <option value="sizeLowHigh">Size: Small to Large</option>
      <option value="titleAZ">Title: A to Z</option>
      <option value="titleZA">Title: Z to A</option>
    </select>
  );
};

export default SortDropdown;
