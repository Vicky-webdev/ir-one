import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import Layout from './components/layouts/Layout.tsx';
import { ToastProvider } from './context/ToastContext.tsx';

import App from './App.tsx';
 import './styles/base.css';

import './index.css';

import { Provider } from 'react-redux';
import { store } from './store';
import { AuthModalProvider } from './context/AuthModalContext'; // ✅ import the context

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthModalProvider> {/* ✅ Wrap here */}
        <ToastProvider>
          <Layout>
            <App />
          </Layout>
          </ToastProvider>


        </AuthModalProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
