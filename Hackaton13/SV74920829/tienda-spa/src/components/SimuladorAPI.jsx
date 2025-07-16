// Importa useState para manejar estados y useEffect para efectos secundarios
import { useEffect, useState } from 'react';

export default function SimuladorAPI() {
  // Estado para almacenar los datos obtenidos de la API
  const [datos, setDatos] = useState([]);
  // Estado para controlar si está cargando la información
  const [cargando, setCargando] = useState(true);
  // Estado para almacenar cualquier error que ocurra durante la carga
  const [error, setError] = useState(null);

  // useEffect se ejecuta una vez cuando el componente monta
  useEffect(() => {
    // Petición a la API para obtener 5 posts
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => res.json()) // Convierte la respuesta a JSON
      .then((data) => {
        setDatos(data);        // Guarda los datos recibidos en el estado
        setCargando(false);    // Cambia estado para indicar que ya no está cargando
      })
      .catch((err) => {
        setError('Error al cargar datos'); // Guarda el error si falla la petición
        setCargando(false);                 // Cambia estado para indicar que ya no está cargando
      });
  }, []); // Array vacío: solo se ejecuta al montar el componente

  // Si está cargando, muestra un mensaje
  if (cargando) return <p>Cargando datos...</p>;

  // Si hubo un error, muestra el mensaje de error
  if (error) return <p>{error}</p>;

  // Renderiza la lista de posts cuando ya se tienen los datos
  return (
    <div>
      <h4>Posts desde API:</h4>
      <ul>
        {datos.map((post) => (
          <li key={post.id}>{post.title}</li> // Muestra el título de cada post
        ))}
      </ul>
    </div>
  );
}
