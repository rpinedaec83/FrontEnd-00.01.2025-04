// Importa useState para manejar el estado local y useEffect para efectos secundarios
import { useEffect, useState } from 'react';

export default function Temporizador() {
  // Estado para almacenar el tiempo transcurrido, inicializado en 0
  const [tiempo, setTiempo] = useState(0);

  // useEffect para iniciar el temporizador al montar el componente
  useEffect(() => {
    // Crea un intervalo que incrementa el tiempo cada segundo (1000 ms)
    const intervalo = setInterval(() => {
      setTiempo((prev) => prev + 1); // Incrementa el tiempo en 1 cada segundo
    }, 1000);

    // Cleanup: al desmontar el componente, limpia el intervalo para evitar fugas de memoria
    return () => {
      clearInterval(intervalo);
    };
  }, []); // El arreglo vacío asegura que el efecto se ejecute solo una vez al montar

  // Renderiza el tiempo transcurrido en segundos
  return <p>Tiempo transcurrido: {tiempo}s</p>;
}
