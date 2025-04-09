import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHistory } from '@fortawesome/free-solid-svg-icons';

const builders = [
  {
    name: "Prestige Group",
    projects: 156,
    experience: "25+ Years",
    image: "https://public.readdy.ai/ai/img_res/67b13b4e01adb2e8c4d841bf8f377fdf.jpg",
    rating: 4.8,
  },
  {
    name: "DLF Limited",
    projects: 203,
    experience: "30+ Years",
    image: "https://public.readdy.ai/ai/img_res/4687788c433989c03393893b88384252.jpg",
    rating: 4.9,
  },
  {
    name: "Godrej Properties",
    projects: 178,
    experience: "28+ Years",
    image: "https://public.readdy.ai/ai/img_res/7e777ea077a2620c6f74cab4209415b4.jpg",
    rating: 4.7,
  },
  {
    name: "Sobha Developers",
    projects: 142,
    experience: "22+ Years",
    image: "https://public.readdy.ai/ai/img_res/e7db833bf2068e6cf34bb11e831beafc.jpg",
    rating: 4.8,
  },
];

const PopularBuilders: React.FC = () => {
  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Premium Developers</h2>
        <p className="text-gray-600 mt-2">
          Partner with the most trusted names in luxury real estate
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {builders.map((builder) => (
          <div
            key={builder.name}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="relative h-48">
              <img src={builder.image} alt={builder.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{builder.name}</h3>
              <div className="flex items-center mt-2">
                <div className="text-yellow-400 text-lg">
                  {"★".repeat(Math.floor(builder.rating))}
                  {builder.rating % 1 !== 0 && "½"}
                </div>
                <span className="ml-2 text-gray-600">{builder.rating}/5</span>
              </div>
              <div className="mt-4 space-y-2 text-gray-600 text-sm">
                <div>
                  <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                  {builder.projects} Projects
                </div>
                <div>
                  <FontAwesomeIcon icon={faHistory} className="mr-2" />
                  {builder.experience}
                </div>
              </div>
              <button className="!rounded-button mt-4 w-full bg-blue-600 text-white py-2 hover:bg-blue-700">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBuilders;
