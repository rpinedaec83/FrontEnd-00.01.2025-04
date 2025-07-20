import PurchaseHistory from './components/PurchaseHistory';

function App() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Productos a la izquierda */}
        <div className="col-lg-8">
          <ProductList />
        </div>
        {/* Sidebar a la derecha */}
        <div className="col-lg-4 d-flex flex-column gap-4" style={{ height: '80vh' }}>
          <div style={{ flex: 2, overflowY: 'auto' }}>
            <Cart />
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <Favorites />
          </div>
          <div style={{ flex: 2, overflowY: 'auto' }}>
            <PurchaseHistory />
          </div>
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}
