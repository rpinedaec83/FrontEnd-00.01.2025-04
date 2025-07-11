import { useState, useEffect } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  const [tiempo, setTiempo] = useState(0);
  const [data, setData] = useState(null);

    const incrementar = () => {
    setContador(prev => prev + 1);
  };

    useEffect(() => {
    console.log(`Contador actualizado: ${contador}`);
  }, [contador]);

    useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(prev => prev + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(json => {
        setData(json);
        console.log('Datos cargados:', json);
      })
      .catch(err => console.error('Error al obtener datos:', err));
  }, []);

  return (
    <div className="container text-center mt-5">
      <div className="card shadow p-4">
        <h2>Contador: {contador}</h2>
        <button className="btn btn-primary mb-3" onClick={incrementar}>
          Incrementar
        </button>
        <div>
          {contador > 5 ? (
            <p className="alert alert-success">¡Alto contador!</p>
          ) : (
            <p className="alert alert-warning">Contador bajo</p>
          )}
          <button
            className="btn btn-secondary"
            onClick={() => setContador(0)}
          >
            Reset
          </button>
        </div>

        <hr />

        <h4> Tiempo activo: {tiempo} segundos</h4>

        <hr />

        <h4> Datos:</h4>
        {data ? (
          <div className="alert alert-info">
            <p><strong>Nombre:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Empresa:</strong> {data.company.name}</p>
          </div>
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </div>
  );
}

export default Contador;
