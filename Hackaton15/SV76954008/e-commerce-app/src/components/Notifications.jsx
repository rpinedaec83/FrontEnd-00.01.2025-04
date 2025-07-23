import { useEffect } from 'react';

export default function Notifications() {
  useEffect(() => {
    const listener = (e) => alert(`Producto agregado: ${e.detail.title}`);
    document.addEventListener('productAdded', listener);
    return () => document.removeEventListener('productAdded', listener);
  }, []);

  return null;
}
