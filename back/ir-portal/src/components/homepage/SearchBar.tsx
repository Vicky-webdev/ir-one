import React, { useState } from 'react';

const mockApiCall = (query: string): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockLocations = [
        'Chennai',
        'Coimbatore',
        'Bangalore',
        'Hyderabad',
        'Mumbai',
        'Delhi',
        'Pune',
        'Madurai',
        'Trichy',
      ];
      const results = mockLocations.filter((loc) =>
        loc.toLowerCase().includes(query.toLowerCase())
      );
      resolve(results);
    }, 500);
  });
};

const SearchBar: React.FC = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleLocationChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setLocation(query);
    if (query.length > 1) {
      const results = await mockApiCall(query);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setLocation(suggestion);
    setSuggestions([]);
  };

  const handleSearch = () => {
    console.log('Searching with:', { location, propertyType, budget });
    // Later: Redirect or call backend API with search params
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-4xl mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={handleLocationChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          {suggestions.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 w-full rounded-b-lg mt-1 z-10 max-h-40 overflow-y-auto">
              {suggestions.map((item) => (
                <li
                  key={item}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg"
        >
          <option value="">Property Type</option>
          <option value="plot">Plots</option>
          <option value="apartment">Apartments</option>
          <option value="villa">Villas</option>
        </select>
        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg"
        >
          <option value="">Budget</option>
          <option value="10-20">₹10L - ₹20L</option>
          <option value="20-40">₹20L - ₹40L</option>
          <option value="40+">₹40L+</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
