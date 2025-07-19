import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { getAllProducts, getByCategory } from '../api/productService';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import Filters from '../components/Filters';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = async (category = '') => {
    setLoading(true);
    const data = category ? await getByCategory(category) : await getAllProducts();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Filters onCategoryChange={loadProducts} />
      {loading ? (
        <Loader />
      ) : (
        <Row xs={1} md={3} className='g-4'>
          {products.map(product => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
