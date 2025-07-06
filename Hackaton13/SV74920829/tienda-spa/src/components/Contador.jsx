// Importa useState para manejar estado local y useEffect para efectos secundarios
import { useState, useEffect } from 'react';

export default function Contador() {
  // Declara el estado 'contador' inicializado en 0
  const [contador, setContador] = useState(0);

  // useEffect se ejecuta cada vez que cambia el valor de 'contador'
  useEffect(() => {
    console.log(`Contador actualizado: ${contador}`); // Muestra en consola el valor actualizado
  }, [contador]);

  return (
    <div className="card p-3">
      {/* Muestra el valor actual del contador */}
      <h3>Contador: {contador}</h3>
      
      {/* Botón para incrementar el contador en 1 cuando se clickea */}
      <button className="btn btn-success" onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>

      {/* Mensaje condicional: si contador > 5 muestra alerta en rojo, sino texto en azul */}
      {contador > 5 ? (
        <p className="text-danger mt-2">¡Alto contador!</p>
      ) : (
        <p className="text-primary mt-2">Contador bajo</p>
      )}
    </div>
  );
}
