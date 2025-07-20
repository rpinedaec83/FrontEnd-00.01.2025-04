import { useState, useEffect } from 'react';

export default function ClickCounter() {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem('clickCount')) || 0;
  });

  useEffect(() => {
    localStorage.setItem('clickCount', count);
  }, [count]);

  const increment = () => setCount(c => c + 1);

  return (
    <div>
      <p>Has interactuado {count} veces</p>
      <button onClick={increment}>Haz clic aquí</button>
    </div>
  );
}
