import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default function App() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4 text-primary">🛍️ Tienda Online</h1>
      <div className="row">
        <div className="col-md-8">
          <ProductList />
        </div>
        <div className="col-md-4">
          <Cart />
        </div>
      </div>
    </div>
  );
}
