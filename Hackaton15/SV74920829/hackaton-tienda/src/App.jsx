import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import ClickCounter from './components/ClickCounter';
import Leaderboard from './components/Leaderboard';

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        padding: '2rem 1rem',
        color: '#333',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        className="container my-5 p-4 bg-white rounded shadow"
        style={{ maxWidth: '1500px' }}
      >
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-primary fw-bold">🛒 Mi Tienda Online</h1>
          <ClickCounter />
        </header>

        <div className="row gx-5">
          {/* Productos - 70% */}
          <main className="col-lg-8" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            <ProductList />
          </main>

          {/* Sidebar (Carrito + Favoritos + Leaderboard) - 30% */}
          <aside className="col-lg-4 d-flex flex-column gap-4" style={{ height: '80vh' }}>
            <div style={{ flex: 2, overflowY: 'auto' }}>
              <Cart />
            </div>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              <Favorites />
            </div>
            <div style={{ flexShrink: 0 }}>
              <Leaderboard />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
