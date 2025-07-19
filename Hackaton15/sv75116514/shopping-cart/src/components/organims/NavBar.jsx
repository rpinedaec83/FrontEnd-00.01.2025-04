import { Link } from 'react-router-dom'; // Importación faltante
import Logo from "../atoms/Logo";
import NavLinks from "../molecules/NavLinks";
import { useCart } from "../context/CartContext";
import { useFavorites } from '../context/FavoritesContext'; // Importación del contexto de favoritos

export default function NavBar() {
    const { totalItems } = useCart();
    const { favorites } = useFavorites();

    
    return (
      <nav className="navbar bg-white px-4 py-3 shadow-sm">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <Logo />
          <NavLinks />
          <div className="d-flex gap-3 align-items-center">
            
            {/* Enlace a la página de favoritos */}
            <Link to="/favoritos" className="position-relative">
              <i className="bi bi-heart fs-4 text-danger"></i>
              {favorites.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {favorites.length}
                </span>
              )}
            </Link>
  
            <Link 
              to="/cart" 
              className="btn btn-outline-primary p-2 d-flex align-items-center justify-content-center position-relative" 
              style={{ width: '40px', height: '40px' }}
            >
              🛒
              {totalItems > 0 && (
                <span 
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{
                    fontSize: '0.65rem',
                    padding: '0.25rem 0.4rem',
                    minWidth: '20px'
                  }}
                >
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    );
  }
  