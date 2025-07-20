// src/components/ClickCounter.jsx
import { useEffect, useState } from 'react';

export default function ClickCounter() {
  const [clicks, setClicks] = useState(() =>
    Number(localStorage.getItem('clicks')) || 0
  );

  useEffect(() => {
    const handler = () => {
      setClicks(prev => {
        const updated = prev + 1;
        localStorage.setItem('clicks', updated);
        return updated;
      });
    };
    document.addEventListener('productAdded', handler);
    return () => document.removeEventListener('productAdded', handler);
  }, []);

  return <p>Interacciones con productos: {clicks}</p>;
}
