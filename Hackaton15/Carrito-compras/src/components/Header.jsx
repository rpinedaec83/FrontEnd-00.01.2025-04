import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/HeaderStyles.css';

export default function Header() {
  const { getTotalItems, favorites } = useContext(CartContext);

  return (
    <header style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #ddd' }}>
      <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem', color: 'purple' }}>🏴 MiTienda</Link>
      <Link to="/favorites" style={{ marginLeft: '1rem', textDecoration: 'none' }}>❤️ ({favorites.length})</Link>
      <Link to="/cart" style={{ marginLeft: '1rem', textDecoration: 'none' }}>🛒 ({getTotalItems()})</Link>
    </header>
  );
}