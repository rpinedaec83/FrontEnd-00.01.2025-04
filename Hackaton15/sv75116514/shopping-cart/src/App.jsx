import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/organims/NavBar"
import ProductList from "./components/organims/ProductList";
import { CartProvider } from './components/context/CartContext';
import CartPage from './components/routes/CartPages';
import { FavoritesProvider } from './components/context/FavoritesContext';
import FavoritesView from './components/routes/FavoritesView';


function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/category/:cat" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favoritos" element={<FavoritesView />} /> 
        <Route path="*" element={<h3 className="text-center mt-5">404 – Página no encontrada</h3>} />
      </Routes>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;