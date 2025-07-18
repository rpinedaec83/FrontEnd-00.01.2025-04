import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartBadge() {
  const { getTotalItems } = useContext(CartContext);
  const total = getTotalItems();

  return (
    <Link to="/cart" style={{ position: 'relative', textDecoration: 'none' }}>
      🛒
      {total > 0 && (
        <span style={{
          position: 'absolute',
          top: '-8px',
          right: '-10px',
          background: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 6px',
          fontSize: '0.8rem'
        }}>
          {total}
        </span>
      )}
    </Link>
  );
}
