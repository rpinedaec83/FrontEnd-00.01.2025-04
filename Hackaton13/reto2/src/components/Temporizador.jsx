// src/components/Temporizador.jsx
import { useState, useEffect } from "react";

function Temporizador() {
  const [segundos, setSegundos] = useState(0);
  const [mensajeApi, setMensajeApi] = useState("Cargando...");
  const [loading, setLoading] = useState(true);

  // ⏱️ Temporizador con setInterval
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalo); // ✅ limpieza al desmontar
  }, []);

  // 📡 Simular llamada a API
  useEffect(() => {
    // Simulación de llamada a una API falsa
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setMensajeApi(data.title);
        setLoading(false);
      })
      .catch(() => {
        setMensajeApi("Error al cargar la API.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-primary">⏱ Tiempo transcurrido: {segundos} segundos</h2>

      <div className="card mt-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">📡 Resultado de la API:</h5>
          <p className="card-text">
            {loading ? "Cargando datos..." : mensajeApi}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Temporizador;

