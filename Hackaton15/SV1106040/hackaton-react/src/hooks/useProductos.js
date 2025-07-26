// src/hooks/useProductos.js
import { useEffect, useState } from 'react';
import { getProductos } from '../api/getProductos';

export const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductos().then(data => {
      setProductos(data);
      setLoading(false);
    });
  }, []);

  return { productos, loading };
};
