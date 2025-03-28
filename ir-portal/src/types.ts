// types.ts

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  favorite?: boolean; // <-- optional favorite flag
}

export interface Filters {
  priceMin?: number;
  priceMax?: number;
  sqftMin?: number;
  sqftMax?: number;
  location?: string;
  showFavorites?: boolean;
  sortBy?: 'priceLowHigh' | 'priceHighLow' | 'sizeLowHigh' | 'titleAZ' | 'titleZA' | 'default';
}
