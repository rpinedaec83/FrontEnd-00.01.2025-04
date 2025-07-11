// src/components/Usuarios.jsx
import { useState, useEffect } from "react";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data);
        setCargando(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2>📋 Lista de Usuarios</h2>
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <ul className="list-group">
          {usuarios.map((user) => (
            <li key={user.id} className="list-group-item">
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Usuarios;
