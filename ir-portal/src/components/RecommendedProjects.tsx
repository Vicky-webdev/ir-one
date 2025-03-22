import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/pagination';

const RecommendedProjects: React.FC = () => {
  const projects = [
    {
      title: "The Grand Residences",
      location: "Upper East Side, Manhattan",
      price: "$4.5M",
      image: "https://public.readdy.ai/ai/img_res/7aa701467f4f141b345a85c2d90d638d.jpg",
    },
    {
      title: "Azure Sky Villas",
      location: "Beverly Hills, LA",
      price: "$6.2M",
      image: "https://public.readdy.ai/ai/img_res/58700f72cca14b5322ab0768244b9df8.jpg",
    },
    {
      title: "The Peninsula Estates",
      location: "Pacific Heights, SF",
      price: "$5.8M",
      image: "https://public.readdy.ai/ai/img_res/789407c76c70ca7a6c5bcc631a56d165.jpg",
    },
    {
      title: "Oceanfront Residences",
      location: "Miami Beach, FL",
      price: "$7.1M",
      image: "https://public.readdy.ai/ai/img_res/4c6694243fa56463a4d3903c70613c0c.jpg",
    },
  ];

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Recommended Projects</h2>
          <p className="text-gray-600 mt-2">Handpicked premium properties for you</p>
        </div>
        <button className="!rounded-button px-6 py-2 border border-gray-300 hover:bg-gray-50 whitespace-nowrap">
          View All <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="mb-8"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  {project.location}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{project.price}</span>
                  <button className="!rounded-button px-4 py-2 bg-gray-100 hover:bg-gray-200 whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendedProjects;
