// src/components/Layout.tsx
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

interface LayoutProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ searchQuery, setSearchQuery, children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;