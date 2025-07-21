import { useEffect, useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  // Cargar desde localStorage al iniciar
  useEffect(() => {
    const storedCount = localStorage.getItem('clickCount');
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }, []);

  // Escuchar el evento personalizado
  useEffect(() => {
    const handleProductAdded = () => {
      setCount((prev) => {
        const newCount = prev + 1;
        localStorage.setItem('clickCount', newCount);
        return newCount;
      });
    };

    document.addEventListener('productAdded', handleProductAdded);

    return () => {
      document.removeEventListener('productAdded', handleProductAdded);
    };
  }, []);

  return (
    <div className="text-center mt-3">
      <p className="text-muted">Has agregado productos {count} veces 🧮</p>
    </div>
  );
};

export default ClickCounter;
