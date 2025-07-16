import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { getCategories } from '../api/productService';

const Filters = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <Form.Select onChange={e => onCategoryChange(e.target.value)} className='mb-4'>
      <option value=''>Todas las categorías</option>
      {categories.map(cat => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </Form.Select>
  );
};

export default Filters;
