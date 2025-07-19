import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../api/products';
import Loader from '../components/Loader';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then(data => setProduct(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="card">
      <img src={product.image} className="card-img-top p-4" style={{ maxWidth: 300 }} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p><strong>Precio: </strong>${product.price}</p>
      </div>
    </div>
  );
}