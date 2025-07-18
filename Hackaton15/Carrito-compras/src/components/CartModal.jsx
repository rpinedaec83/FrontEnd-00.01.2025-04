import { useContext, useState, useRef, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartModal() {
  const { cart, removeFromCart, clearCart, getTotal } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    if (show) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [show]);

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setShow(!show)}>🛒 Ver Carrito</button>
      {show && (
        <>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.3)',
            zIndex: 998
          }} />
          <div ref={modalRef} style={{
            position: 'fixed',
            top: '70px',
            right: '5vw',
            background: '#fff',
            border: '1px solid #ccc',
            padding: '1rem',
            width: '90vw',
            maxWidth: '400px',
            maxHeight: '70vh',
            overflowY: 'auto',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            zIndex: 999,
            borderRadius: '8px'
          }}>
            <h4>Carrito</h4>
            {cart.length === 0 ? <p>Vacío</p> : (
              <>
                <ul style={{ padding: 0, listStyle: 'none' }}>
                  {cart.map(item => (
                    <li key={item.id} style={{ display: 'grid', gridTemplateColumns: '60px 1fr auto', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px', objectFit: 'contain', border: '1px solid #ddd', borderRadius: '4px' }} />
                      <div style={{ fontSize: '0.85rem' }}>
                        <strong>{item.title}</strong><br />
                        x {item.quantity} = ${ (item.price * item.quantity).toFixed(2) }
                      </div>
                      <button onClick={() => removeFromCart(item.id)} style={{ fontSize: '1rem' }}>❌</button>
                    </li>
                  ))}
                </ul>
                <p><strong>Total:</strong> ${getTotal()}</p>
                <button onClick={clearCart} style={{ marginTop: '0.5rem', background: '#e53935', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
                  Vaciar carrito
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

