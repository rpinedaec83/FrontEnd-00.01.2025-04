import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function InteractionCounter() {
  const { interactionCount } = useContext(CartContext);

  return (
    <div style={{ padding: '0.5rem', fontSize: '0.9rem', color: '#555' }}>
      🧠 Has interactuado con productos {interactionCount} veces.
    </div>
  );
}
