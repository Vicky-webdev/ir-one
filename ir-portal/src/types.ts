    // types.ts
export interface PropertyFormData {
    basicDetails: {
      type: string;
      listingType: string;
      price: string;
      area: string;
      bedrooms: string;
      furnishing: string;
      availability: string;
    };
    location: {
      address: string;
      city: string;
      state: string;
      pinCode: string;
      landmark: string;
    };
    media: File[];
    amenities: string[];
    description: string;
    contact: {
      name: string;
      email: string;
      mobile: string;
    };
  }
  