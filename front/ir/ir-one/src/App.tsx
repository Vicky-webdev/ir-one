import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/index';
import PropertiesPage from './pages/properties/index';
import PropertyDetailPage from './pages/properties/[id]';

import DashboardPage from './pages/dashboard';
import PlotsPage from './pages/buy/plots';
import VillasPage from './pages/buy/villa';
import IndependentHomesPage from './pages/buy/independent-house';
import FlatsPage from './pages/buy/flats';
import ResultsPage from './pages/results';



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/properties" element={<PropertiesPage />} />
      
      <Route path="/property/:id" element={<PropertyDetailPage />} /> 

 
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/buy/plots" element={<PlotsPage />} />
      <Route path="/buy/villas" element={<VillasPage />} />
      <Route path="/buy/independent-homes" element={<IndependentHomesPage />} />
      <Route path="/buy/flats" element={<FlatsPage />} />
      <Route path="/results" element={<ResultsPage />} />

    </Routes>
  );
}

export default App;
