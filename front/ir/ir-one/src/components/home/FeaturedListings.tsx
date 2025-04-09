import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Listing {
  id: string;
  title: string;
  by: string;
  location: string;
  type: string;
  priceRange: string;
  image: string;
  badge?: string;
}

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
  {
    id: '4',
    title: 'Sunshine Valley',
    by: 'Sun Realty',
    location: 'Plots in Tambaram, Chennai',
    type: 'Land / Plot',
    priceRange: '₹10L - ₹15L',
    image: 'https://via.placeholder.com/300x200',
    badge: 'Sold Out'
  },
  {
    id: '5',
    title: 'Green Nest Villas',
    by: 'Green Builders',
    location: 'Villas in Kelambakkam',
    type: 'Villa',
    priceRange: '₹80L - ₹1.1Cr',
    image: 'https://via.placeholder.com/300x200',
    badge: 'Limited Units'
  }
];

import { CustomArrowProps } from 'react-slick';

const NextArrow = ({ onClick }: CustomArrowProps) => (
  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow hover:scale-110 transition" onClick={onClick}>
    <FaChevronRight className="text-blue-600" />
  </div>
);

const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow hover:scale-110 transition" onClick={onClick}>
    <FaChevronLeft className="text-blue-600" />
  </div>
);

const getBadgeColor = (badge: string | undefined) => {
  switch (badge) {
    case 'Hot':
      return 'bg-red-500';
    case 'New Launch':
      return 'bg-green-500';
    case 'Active':
      return 'bg-blue-500';
    case 'Sold Out':
      return 'bg-gray-800';
    case 'Limited Units':
      return 'bg-yellow-500';
    default:
      return 'bg-gray-500';
  }
};

const FeaturedListings: React.FC<{ listings?: Listing[] }> = ({ listings = defaultListings }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (id: string) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter(fav => fav !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    if (!favorites.includes(id)) {
      setToast('Added to Wishlist');
      setTimeout(() => setToast(null), 3000);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <motion.section
      className="py-16 px-4 md:px-10 lg:px-20 bg-gray-50 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {toast && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          {toast}
        </div>
      )}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">🏡 Featured Listings</h2>
        <p className="text-gray-600 mt-3 text-base">Top properties hand-picked just for you</p>
      </div>

      <div className="relative px-2">
        <Slider {...settings}>
          {listings.map((listing) => (
            <div key={listing.id} className="px-2">
              <div className="h-full flex flex-col justify-between bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden relative">
                {listing.badge && (
                  <span
                    className={`absolute top-3 left-3 text-white text-xs font-semibold px-2 py-1 rounded z-10 ${getBadgeColor(listing.badge)}`}
                  >
                    {listing.badge}
                  </span>
                )}

                <button
                  onClick={() => toggleFavorite(listing.id)}
                  className="absolute top-3 right-3 text-lg text-gray-400 z-10 transition"
                >
                  <FaHeart className={favorites.includes(listing.id) ? 'text-red-500' : 'text-gray-400'} />
                </button>

                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-1">{listing.title}</h3>
                    <p className="text-sm text-gray-500">By {listing.by}</p>
                    <p className="text-sm text-gray-600">{listing.location}</p>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-sm font-medium text-blue-600">{listing.type}</span>
                    <span className="text-base font-semibold text-green-700">{listing.priceRange}</span>
                  </div>
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
