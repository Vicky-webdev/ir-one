import React from 'react';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Type for property listing
interface Listing {
  id: string;
  title: string;
  by: string;
  location: string;
  type: string;
  priceRange: string;
  image: string;
  badge?: string; // e.g., "Hot", "New Launch", "Active"
}

// Default sample listings
const defaultListings: Listing[] = [
  {
    id: '1',
    title: 'Creative New Vision Township',
    by: 'Creative Developers',
    location: 'Plots in Guindy, Chennai',
    type: 'Land / Plot',
    priceRange: '₹12L - ₹18L',
    image: 'https://newprojects.99acres.com/projects/creative_township_developers/creative_new_vision_township/images/p3vp7t0_1733740582_536598175_med.jpg',
    badge: 'Hot'
  },
  {
    id: '2',
    title: 'Divyasree Hub 6',
    by: 'Divyasree Developers',
    location: 'Villa in Padappai, Chengalpattu',
    type: 'Villa',
    priceRange: '₹1.2Cr - ₹1.5Cr',
    image: 'https://newprojects.99acres.com/projects/divyasree_/divyasree_hub_6/images/yj0i199_1739942778_570743809_med.jpg',
    badge: 'New Launch'
  },
  {
    id: '3',
    title: 'Omega Town',
    by: 'VVR Properties',
    location: 'Plots in Avadi, Chennai',
    type: 'Land / Plot',
    priceRange: '₹15L - ₹22L',
    image: 'https://newprojects.99acres.com/projects/vvr_southindia_properties_llp/vvr_omega_town_1/images/ktxrakc_1720605812_503705977_med.jpg',
    badge: 'Active'
  },
];

// Custom arrows for slider
const NextArrow = (props: any) => (
  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-blue-600 hover:text-blue-800" onClick={props.onClick}>
    <FaChevronRight size={20} />
  </div>
);

const PrevArrow = (props: any) => (
  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-blue-600 hover:text-blue-800" onClick={props.onClick}>
    <FaChevronLeft size={20} />
  </div>
);

const FeaturedListings: React.FC<{ listings?: Listing[] }> = ({ listings = defaultListings }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.section
      className="py-12 px-4 md:px-8 lg:px-16 bg-gray-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Featured Listings</h2>
        <p className="text-gray-600 mt-2">Top properties hand-picked for you</p>
      </div>

      <div className="relative">
        <Slider {...settings}>
          {listings.map((listing) => (
            <div key={listing.id} className="px-2">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden relative">
                {listing.badge && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                    {listing.badge}
                  </span>
                )}

                <span className="absolute top-2 right-2 text-gray-600 hover:text-red-500 cursor-pointer">
                  <FaHeart />
                </span>

                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-[152px] object-cover rounded-t-xl"
                />

                <div className="p-3 space-y-1">
                  <h3 className="text-base font-bold text-black">{listing.title}</h3>
                  <p className="text-sm text-gray-500">By {listing.by}</p>
                  <p className="text-sm text-gray-600">{listing.location}</p>
                  <p className="text-base font-semibold text-green-700">{listing.priceRange}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
};

export default FeaturedListings;
