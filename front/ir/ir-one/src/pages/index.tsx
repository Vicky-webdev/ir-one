 import HeroSection from '../components/ui/HeroSection';
 import SearchFilterBar from "../components/home/SearchFilterBar";

 import FeaturesSection from '../components/home/FeaturesSection';
 import FeaturedListings from '../components/home/FeaturedListings';
 
 
 
 import 'slick-carousel/slick/slick.css';
 import 'slick-carousel/slick/slick-theme.css';

 import bannerImage from '../assets/images/1.jpg';


const HomePage = () => {
  interface SearchFilters {
    location?: string;
    priceRange?: [number, number];
    propertyType?: string;
  }

  const handleSearch = (filters: SearchFilters) => {
    console.log('Search triggered:', filters);
    // Optional: filter listings or call API here
  };

    return (
      <div className="px-4 sm:px-6 lg:px-8">

       {/* Reusable Hero Section  */}

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
      
  {/*  Reusable Hero Section */}

     
  
        {/* Reusable Search Filter Bar */}
  
        
          <SearchFilterBar onSearch={handleSearch} />

    
          {/* Reusable Search Filter Bar */}
    


          {/* Add your search functionality here */}
          {/* For example, you can use the onSearch prop to filter listings based on user input */}
    
          {/* Reuseable Featured Section */}


      {/* Reuseable Featured Section */}

      <FeaturesSection />


      {/* Reuseable Featured Section */}

        
      {/* Reusable Featured Listings Section */}

           <FeaturedListings />


      {/* Reusable Featured Listings Section */}


      




        {/* Add more sections or components as needed */}





      </div>
    );
  };
  
  export default HomePage;
  