// SearchContext.tsx

import React, { createContext, useState } from 'react';
import { Filters } from '../types';

interface SearchContextType {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  resetFilters: () => void;
}

export const SearchContext = createContext<SearchContextType>({
  filters: {},
  setFilters: () => {},
  resetFilters: () => {},
});

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>({});

  const resetFilters = () => {
    setFilters({});
  };

  return (
    <SearchContext.Provider value={{ filters, setFilters, resetFilters }}>
      {children}
    </SearchContext.Provider>
  );
};
