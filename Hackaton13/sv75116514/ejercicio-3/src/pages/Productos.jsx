import { useState, useEffect } from "react";
import ProductoCard from "../components/ProductoCard";

export default function Productos() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
          setProductos(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div className="row">
        {productos.map(p => (
          <ProductoCard key={p.id} producto={p} />
        ))}
      </div>
    );
  }
  