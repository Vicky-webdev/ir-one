import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Rent from './pages/Rent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/rent" element={<Rent />} />
      </Routes>
    </Router>
  );
};

export default App;
