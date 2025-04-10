import React, { useState } from 'react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  initialValue?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search by project, location, developer...',
  onSearch,
  initialValue = '',
  className = '',
}) => {
  const [searchText, setSearchText] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchText.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center gap-2 w-full ${className}`}
    >
      <Input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder={placeholder}
        className="flex-1"
      />
      <Button type="submit" variant="primary">
        <Search size={16} className="mr-1" />
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
