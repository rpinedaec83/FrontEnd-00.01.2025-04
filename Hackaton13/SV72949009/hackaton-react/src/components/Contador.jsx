import { useState, useEffect } from 'react';

export default function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('Contador:', contador);
  }, [contador]);

  return (
    <div className="mb-3">
      <h3>Contador: {contador}</h3>
      <button className="btn btn-success" onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
      <p>{contador > 5 ? 'Alto contador!' : 'Contador bajo'}</p>
    </div>
  );
}