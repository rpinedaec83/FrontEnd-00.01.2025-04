import { useEffect, useState } from 'react';

export const useClickCounter = () => {
  const [clicks, setClicks] = useState(() => {
    // Leer de LocalStorage o iniciar en 0
    const saved = localStorage.getItem('clicks');
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    const handleClick = () => {
      setClicks(prev => {
        const newCount = prev + 1;
        localStorage.setItem('clicks', newCount);
        return newCount;
      });
    };

    document.addEventListener('productAdded', handleClick);

    return () => {
      document.removeEventListener('productAdded', handleClick);
    };
  }, []);

  return clicks;
};
