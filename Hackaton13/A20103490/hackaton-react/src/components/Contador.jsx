import { useState, useEffect } from 'react';

export default function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`El contador cambió a: ${contador}`);
  }, [contador]);

  return (
    <div className="text-center">
      <h2>Contador: {contador}</h2>
      <button className="btn btn-primary" onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
      <p className="mt-3">
        {contador > 5 ? '¡Alto contador!' : 'Contador bajo'}
      </p>
    </div>
  );
}