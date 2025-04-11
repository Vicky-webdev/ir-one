import { useState } from 'react';

const SearchBar = ({ onSearch }: { onSearch: (query: any) => void }) => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bhk, setBhk] = useState('');
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleLocationChange = (value: string) => {
    setLocation(value);

    // Fake suggestion logic (replace with real autosuggest later)
    const allLocations = ['Chennai', 'Mumbai', 'Bangalore', 'Coimbatore', 'Delhi'];
    const filtered = allLocations.filter(loc =>
      loc.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSubmit = () => {
    onSearch({
      location,
      propertyType,
      bhk,
      minBudget,
      maxBudget,
    });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => handleLocationChange(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          />
          {suggestions.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 w-full mt-1 z-10 rounded shadow-sm">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setLocation(suggestion);
                    setSuggestions([]);
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        >
          <option value="">Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Plot">Plot</option>
        </select>

        <select
          value={bhk}
          onChange={(e) => setBhk(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        >
          <option value="">BHK</option>
          <option value="1 BHK">1 BHK</option>
          <option value="2 BHK">2 BHK</option>
          <option value="3 BHK">3 BHK</option>
          <option value="4+ BHK">4+ BHK</option>
        </select>

        <input
          type="number"
          placeholder="Min Budget"
          value={minBudget}
          onChange={(e) => setMinBudget(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        />

        <input
          type="number"
          placeholder="Max Budget"
          value={maxBudget}
          onChange={(e) => setMaxBudget(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Search Properties
      </button>
    </div>
  );
};

export default SearchBar;
