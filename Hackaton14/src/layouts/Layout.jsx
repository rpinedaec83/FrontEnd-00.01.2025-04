import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

function Layout({ children }) {
  const { totalItems } = useCart();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Mi Tienda</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">Favoritos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">🛒 ({totalItems})</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}

export default Layout;
