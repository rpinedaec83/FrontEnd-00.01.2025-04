import { useState, useEffect } from 'react';

export default function Temporizador() {
  const [tiempo, setTiempo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTiempo(t => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Tiempo transcurrido: {tiempo} segundos</p>;
}