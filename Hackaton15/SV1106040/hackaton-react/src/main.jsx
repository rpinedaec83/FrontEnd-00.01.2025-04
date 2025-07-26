import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from './contexts/CartContext'; 
import { FavoritosProvider } from './contexts/FavoritosContext'; 
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritosProvider> 
        <CartProvider>
          <App />
        </CartProvider>
      </FavoritosProvider>
    </BrowserRouter>
  </React.StrictMode>
);

