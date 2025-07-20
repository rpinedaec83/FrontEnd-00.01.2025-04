import React, { useEffect } from 'react';
import ProductList from './components/Productslist';
import ClickCounter from './components/ClickCounter';
import Cart from './components/Cart';

const App = () => {
  useEffect(() => {
    const handler = (e) => {
      alert(`Producto agregado: ${e.detail.title}`);
    };
    document.addEventListener('productAdded', handler);
    return () => document.removeEventListener('productAdded', handler);
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Tienda Online</h1>
      <ClickCounter />
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
