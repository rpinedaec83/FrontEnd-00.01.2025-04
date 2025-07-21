import Notifications from './components/Notifications';
import ClickCounter from './components/ClickCounter';
import ProductList from './components/ProductList';
import FavoritesList from './components/FavoritesList';
import Cart from './components/Cart';
import PurchaseHistory from './components/PurchaseHistory';

function App() {
  return (
    <>
      <Notifications />
      <h1 className="text-center mt-4">🛒 Mi Tienda Online</h1>
      <ClickCounter />
      <ProductList />
      <FavoritesList />
      <Cart />
      <PurchaseHistory />
    </>
  );
}

export default App;
