import { useState, useEffect } from 'react';

export default function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('El contador ha cambiado:', contador);
  }, [contador]);

  return (
    <div className="text-center mt-5">
      <h2>Contador: {contador}</h2>
      <button className="btn btn-primary" onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>

      {contador > 5 ? (
        <p className="text-danger mt-3">¡Alto contador!</p>
      ) : (
        <p className="text-success mt-3">Contador bajo</p>
      )}
    </div>
  );
}
