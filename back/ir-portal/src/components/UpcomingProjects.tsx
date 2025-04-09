import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  {
    title: "The Crown Towers",
    developer: "Prestige Group",
    location: "Central Park, NY",
    completion: "2026 Q2",
    price: "Starting $2.8M",
    image: "https://public.readdy.ai/ai/img_res/1d95f7455ea67f58fde0004b796a78d2.jpg",
  },
  {
    title: "Riverside Heights",
    developer: "DLF Limited",
    location: "Hudson Yards, NY",
    completion: "2026 Q3",
    price: "Starting $3.2M",
    image: "https://public.readdy.ai/ai/img_res/d519468ab4b52711513b91c728596ba6.jpg",
  },
  {
    title: "Sky Gardens",
    developer: "Godrej Properties",
    location: "Downtown Miami",
    completion: "2026 Q1",
    price: "Starting $1.9M",
    image: "https://public.readdy.ai/ai/img_res/4b981223873e07bf6bdcc848841cef02.jpg",
  },
];

const UpcomingProjects: React.FC = () => {
  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Upcoming Projects</h2>
        <p className="text-gray-600 mt-2">
          Be the first to own these exclusive properties
        </p>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={2}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="mb-8"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-gray-300">Developer</p>
                      <p className="font-semibold">{project.developer}</p>
                    </div>
                    <div>
                      <p className="text-gray-300">Location</p>
                      <p className="font-semibold">{project.location}</p>
                    </div>
                    <div>
                      <p className="text-gray-300">Expected Completion</p>
                      <p className="font-semibold">{project.completion}</p>
                    </div>
                    <div>
                      <p className="text-gray-300">Price Range</p>
                      <p className="font-semibold">{project.price}</p>
                    </div>
                  </div>
                  <button className="!rounded-button w-full bg-blue-600 text-white py-3 hover:bg-blue-700">
                    Register Interest
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

export default UpcomingProjects;
