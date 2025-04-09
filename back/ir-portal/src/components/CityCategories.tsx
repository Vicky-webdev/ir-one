import React from 'react';

interface City {
  name: string;
  count: number;
  image: string;
}

const cities: City[] = [
  {
    name: "New York",
    count: 2345,
    image: "https://public.readdy.ai/ai/img_res/25db350c5a329e67b5d6b52174c825c4.jpg",
  },
  {
    name: "Los Angeles",
    count: 1876,
    image: "https://public.readdy.ai/ai/img_res/82e62d1279ebe3ff9a35d06e1ec7bb46.jpg",
  },
  {
    name: "Miami",
    count: 1543,
    image: "https://public.readdy.ai/ai/img_res/1fdb3dc588e92823ff0c487868bdaebe.jpg",
  },
  {
    name: "San Francisco",
    count: 987,
    image: "https://public.readdy.ai/ai/img_res/08bd7b3e1b9d46d10b831535d3d62d12.jpg",
  },
];

const CityCategories: React.FC = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Explore Properties by City
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cities.map((city) => (
          <div
            key={city.name}
            className="relative group cursor-pointer overflow-hidden rounded-lg"
          >
            <div className="relative h-64">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-semibold">{city.name}</h3>
                <p className="text-sm opacity-90">{city.count} Properties</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityCategories;
