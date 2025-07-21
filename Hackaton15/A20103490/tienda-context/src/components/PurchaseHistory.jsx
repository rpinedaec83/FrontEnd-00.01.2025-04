const PurchaseHistory = () => {
  const history = JSON.parse(localStorage.getItem('history') || '[]');

  if (history.length === 0) {
    return <div className="container my-4"><h4>📦 Sin historial de compras</h4></div>;
  }

  return (
    <div className="container my-4">
      <h2>📜 Historial de Compras</h2>
      {history.map((purchase, idx) => (
        <div key={idx} className="card my-3">
          <div className="card-header">
            <strong>Fecha:</strong> {new Date(purchase.date).toLocaleString()}
          </div>
          <div className="card-body">
            <ul className="list-group">
              {purchase.items.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between">
                  <span>{item.title}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
            <h5 className="mt-3">Total: ${purchase.total}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseHistory;
