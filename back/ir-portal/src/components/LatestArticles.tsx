import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const blogs = [
  {
    title: "The Future of Sustainable Luxury Living",
    category: "Trends",
    date: "March 19, 2025",
    readTime: "8 min read",
    image: "https://public.readdy.ai/ai/img_res/6843abd8238800bdc94fab880c92ab2e.jpg",
  },
  {
    title: "Investment Opportunities in Emerging Markets",
    category: "Investment",
    date: "March 18, 2025",
    readTime: "6 min read",
    image: "https://public.readdy.ai/ai/img_res/41435fe0d9be30f999d9e963c7d1a75a.jpg",
  },
  {
    title: "Design Trends Shaping Luxury Properties in 2025",
    category: "Design",
    date: "March 17, 2025",
    readTime: "5 min read",
    image: "https://public.readdy.ai/ai/img_res/314a48c31762b5c154137bbff0f56539.jpg",
  },
];

const LatestArticles: React.FC = () => {
  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Latest Insights</h2>
        <p className="text-gray-600 mt-2">
          Expert advice and market trends in luxury real estate
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {blog.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {blog.title}
              </h3>
              <div className="flex items-center text-gray-600 text-sm mb-4">
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  {blog.date}
                </span>
                <span className="mx-3">•</span>
                <span>
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  {blog.readTime}
                </span>
              </div>
              <button className="!rounded-button w-full bg-gray-100 text-gray-800 py-2 hover:bg-gray-200">
                Read Article <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="!rounded-button px-8 py-3 bg-white border border-gray-300 hover:bg-gray-50">
          View All Articles <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default LatestArticles;
