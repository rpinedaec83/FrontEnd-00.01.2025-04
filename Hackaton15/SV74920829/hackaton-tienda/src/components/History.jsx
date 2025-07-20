const [showSummary, setShowSummary] = useState(false);
const [history, setHistory] = useState(() => {
  return JSON.parse(localStorage.getItem('history')) || [];
});

const checkout = () => {
  const total = getTotal();
  const date = new Date().toISOString();
  setHistory([...history, { date, items: cart, total }]);
  localStorage.setItem('history', JSON.stringify([...history, { date, items: cart, total }]));
  clearCart();
  setShowSummary(true);
};

{showSummary && (
  <div>
    <h3>¡Compra realizada!</h3>
    <p>Total: S/{getTotal()}</p>
  </div>
)}

<button onClick={checkout}>Finalizar compra</button>
