import { useEffect, useState } from 'react';

const Notifications = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleProductAdded = (e) => {
      setMessage(`🛍️ Producto agregado: ${e.detail.title}`);

      // Ocultar después de 3 segundos
      setTimeout(() => setMessage(''), 3000);
    };

    document.addEventListener('productAdded', handleProductAdded);

    return () => {
      document.removeEventListener('productAdded', handleProductAdded);
    };
  }, []);

  if (!message) return null;

  return (
    <div
      className="alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3 shadow"
      style={{ zIndex: 9999, width: 'auto', maxWidth: '90%' }}
    >
      {message}
    </div>
  );
};

export default Notifications;
