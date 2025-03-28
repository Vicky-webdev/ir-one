// useFilteredProperties.tsx

import { useContext, useMemo } from 'react';
import { SearchContext } from '../context/SearchContext';
import { properties } from '../data/properties';
import { Filters, Property } from '../types';

export const useFilteredProperties = (): Property[] => {
  const { filters } = useContext(SearchContext);

  const filtered = useMemo(() => {
    let result = [...properties];

    if (filters.showFavorites) {
      result = result.filter((property) => property.favorite);
    }

    if (filters.priceMin !== undefined) {
      result = result.filter((p) => p.price >= filters.priceMin!);
    }

    if (filters.priceMax !== undefined) {
      result = result.filter((p) => p.price <= filters.priceMax!);
    }

    if (filters.sqftMin !== undefined) {
      result = result.filter((p) => p.sqft >= filters.sqftMin!);
    }

    if (filters.sqftMax !== undefined) {
      result = result.filter((p) => p.sqft <= filters.sqftMax!);
    }

    if (filters.location) {
      result = result.filter((p) =>
        p.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    // Sorting
    switch (filters.sortBy) {
      case 'priceLowHigh':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighLow':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'sizeLowHigh':
        result.sort((a, b) => a.sqft - b.sqft);
        break;
      case 'titleAZ':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'titleZA':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return result;
  }, [filters]);

  return filtered;
};
