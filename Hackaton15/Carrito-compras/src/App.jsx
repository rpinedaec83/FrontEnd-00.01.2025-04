import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Favorites from './components/Favorites'; 
import InteractionCounter from './components/InteractionCounter'; 

export default function App() {
  return (
    <Router>
      <Header />

      {/* Opcional: contador de interacción */}
      <InteractionCounter />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} /> {/* ✅ Nueva ruta */}
      </Routes>
    </Router>
  );
}
