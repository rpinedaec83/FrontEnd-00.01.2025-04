import { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'

export default function Contador() {
  const [contador, setContador] = useState(0)
  const [datoAPI, setDatoAPI] = useState(null)
  const [tiempo, setTiempo] = useState(0)

  // ✅ Log cuando el contador cambia
  useEffect(() => {
    console.log('El contador cambió:', contador)
  }, [contador])

  // ✅ Simular llamada a API al montar
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => {
        console.log('Datos de la API:', data)
        setDatoAPI(data)
      })
      .catch(error => console.error('Error en fetch:', error))
  }, [])

  // ✅ Temporizador con setInterval que se limpia
  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(prev => prev + 1)
      console.log('Tick...', tiempo + 1)
    }, 1000)

    return () => clearInterval(intervalo)
  }, [tiempo])

  return (
    <Container className="mt-4">
      <h2>Contador: {contador}</h2>
      <Button onClick={() => setContador(contador + 1)}>Incrementar</Button>
      {contador > 5 ? <p>Alto contador!</p> : <p>Contador bajo</p>}

      <hr />

      <h3>Temporizador: {tiempo} segundos</h3>

      {datoAPI && (
        <div className="mt-3">
          <h4>Datos de API:</h4>
          <p><strong>ID:</strong> {datoAPI.id}</p>
          <p><strong>Title:</strong> {datoAPI.title}</p>
          <p><strong>Body:</strong> {datoAPI.body}</p>
        </div>
      )}
    </Container>
  )
}


