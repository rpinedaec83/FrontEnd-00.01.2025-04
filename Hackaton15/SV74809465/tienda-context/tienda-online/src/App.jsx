import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import ClickCounter from './components/ClickCounter';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <h1>Tienda Online</h1>
        <ProductList />
        <Cart />
        <Favorites />
        <ClickCounter />
      </div>
    </CartProvider>
  );
};

export default App;