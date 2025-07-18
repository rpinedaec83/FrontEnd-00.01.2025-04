// src/components/ProductList.jsx
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import InteractionCounter from './InteractionCounter';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <InteractionCounter />
      <h2>Productos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
