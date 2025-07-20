import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider> {/* 👈 Esto debe envolver TODO */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
