// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
