import { useState, useEffect } from 'react';

export default function Temporizador() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalo); 
    };
  }, []);

  return <p>Segundos: {segundos}</p>;
}