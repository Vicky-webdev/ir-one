 import React, { useState } from 'react';
import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';
import RecommendedProjects from '../components/RecommendedProjects';

const Buy: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery} centered={false}>
      <HeroBanner />
      <RecommendedProjects />
    </Layout>
  );
};

export default Buy;
