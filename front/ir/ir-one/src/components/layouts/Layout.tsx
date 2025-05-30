import React from 'react';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';
import Header from './Header';
import Footer from './Footer';
import { useAuthModal } from '../../context/AuthModalContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const modalContext = useAuthModal(); // ✅ called unconditionally

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      {modalContext && (
        <>
          <LoginModal
            show={modalContext.showLogin}
            onClose={modalContext.closeModals}
            switchToRegister={modalContext.switchToRegister}
          />
          <RegisterModal
            show={modalContext.showRegister}
            onClose={modalContext.closeModals}
            switchToLogin={modalContext.switchToLogin}
          />
        </>
      )}
    </div>
  );
};

export default Layout;
