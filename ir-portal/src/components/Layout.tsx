 import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  children: React.ReactNode;
  centered?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ searchQuery, setSearchQuery, children, centered = false }) => {
  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
         
      />
       <main className={`${centered ? '' : 'max-w-7xl mx-auto px-4 py-6'}`}>        {children}
        </main>
      <Footer />
    </>
  );
};

export default Layout;
