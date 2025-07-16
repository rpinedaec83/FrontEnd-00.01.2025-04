import { useState, useEffect } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`El contador cambió: ${contador}`);
  }, [contador]);

  return (
    <div className="text-center mt-4">
      <h2>Contador: {contador}</h2>
      <button
        className="btn btn-primary"
        onClick={() => setContador(contador + 1)}
      >
        Incrementar
      </button>
      <div className="mt-3">
        {contador > 5 ? <p> ¡Alto contador!</p> : <p> Contador bajo</p>}
      </div>
    </div>
  );
}

export default Contador;
