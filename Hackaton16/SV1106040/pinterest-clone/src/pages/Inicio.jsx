import React, { useState, useEffect } from "react";
import "./Inicio.css";

const accessKey = "hmyiklYjwQXvM_EvkCunSqVd3zhejnG7RgbfYrMVjsA";


function Inicio() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Buscar imágenes al cargar página con término por defecto
  useEffect(() => {
    buscarImagenesPorDefecto();
  }, []);

  const buscarImagenesPorDefecto = async () => {
    setLoading(true);
    setError(null);
    try {
      const url = `https://api.unsplash.com/search/photos?page=1&query=airport&client_id=${accessKey}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Error al cargar imágenes por defecto");
      const data = await res.json();
      setResults(data.results);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const buscarImagenes = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${accessKey}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Error al buscar imágenes");
      const data = await res.json();
      setResults(data.results);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      buscarImagenes();
    }
  };

  return (
    <div className="inicio py-4">
      <div className="buscador-container input-group mb-3 justify-content-center">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar imágenes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Buscar imágenes"
        />
        <button className="btn btn-danger" onClick={buscarImagenes}>
          Buscar
        </button>
      </div>

      {loading && <p>Cargando imágenes...</p>}
      {error && <p className="text-danger">Error: {error}</p>}

      <div className="grid-container">
        {results.map((img, idx) => (
          <img
            key={idx}
            src={img.urls.small}
            alt={img.alt_description || "Imagen"}
            className="image-card"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default Inicio;
