 import HeroSection from '../components/ui/HeroSection';
 import FeaturesSection from '../components/home/FeaturesSection';
 import FeaturedListings from '../components/home/FeaturedListings';


 import bannerImage from '../assets/images/1.jpg';


const HomePage = () => {
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
  