import React, { Suspense, useEffect, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Lazy load actual **page components**
const Home = lazy(() => import('./pages/Home'));
const Buy = lazy(() => import('./pages/Buy'));
const Rent = lazy(() => import('./pages/Rent'));
const Sell = lazy(() => import('./pages/Sell'));
const PropertyForm = lazy(() => import('./pages/PropertyForm'));

const PlotsPage = lazy(() => import('./pages/buy/plots'));
const VillasPage = lazy(() => import('./pages/buy/villa'));
const IndependentHomesPage = lazy(() => import('./pages/buy/independent-house'));
const FlatsPage = lazy(() => import('./pages/buy/flats'));

const NotFound = lazy(() => import('./pages/NotFound'));

const AppRouter: React.FC = () => {
  return (
    <SearchProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy/plots" element={<PlotsPage />} />
          <Route path="/buy/villas" element={<VillasPage />} />
          <Route path="/buy/independent-homes" element={<IndependentHomesPage />} />
          <Route path="/buy/flats" element={<FlatsPage />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/add-property" element={<PropertyForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        </Suspense>
      </Router>
    </SearchProvider>
  );
};

export default AppRouter;
