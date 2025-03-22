// src/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './App';
import PropertyForm from './pages/PropertyForm';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-property" element={<PropertyForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
