
import { useEffect, useState } from 'react'

export default function Contador() {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log('Contador cambió:', contador)
  }, [contador])

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button className="btn btn-success" onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
      <p>{contador > 5 ? 'Alto contador!' : 'Contador bajo'}</p>
    </div>
  )
}
