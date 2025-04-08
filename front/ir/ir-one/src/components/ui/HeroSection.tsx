// src/components/ui/HeroSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';

type CTA = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
};

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  ctaButtons?: CTA[];
  showSearchBar?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
  ctaButtons = [],
  showSearchBar = false,
}) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-gray-200">{subtitle}</p>
        )}

        {ctaButtons.length > 0 && (
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            {ctaButtons.map((btn) => (
              <Link
                key={btn.href}
                to={btn.href}
                className={`px-6 py-3 rounded-full font-medium transition ${
                  btn.variant === 'secondary'
                    ? 'border border-white hover:bg-white hover:text-blue-600'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        )}

        {showSearchBar && (
          <div className="mt-10 max-w-xl mx-auto bg-white rounded-full p-2 flex shadow-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search by location, city, or keyword..."
              className="flex-grow px-4 py-2 rounded-l-full text-gray-700 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition">
              Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
