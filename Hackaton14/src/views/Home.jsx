import React, { useEffect, useState } from 'react';
import { getProducts, getCategories } from '../api/products';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    async function fetchData() {
      const [productsData, categoriesData] = await Promise.all([
        getProducts(),
        getCategories()
      ]);
      setProducts(productsData);
      setCategories(categoriesData);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filtered = products.filter(p => {
    return (
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === 'all' || p.category === selectedCategory)
    );
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Productos</h2>
      <div className="row mb-3">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar productos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option value="all">Todas las categorías</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="row">
          {filtered.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
