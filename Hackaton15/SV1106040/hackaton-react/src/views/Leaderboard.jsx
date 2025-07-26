import { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('leaderboard')) || {};
    const ordenado = Object.entries(data)
      .sort((a, b) => b[1] - a[1])
      .map(([usuario, total]) => ({ usuario, total: total.toFixed(2) }));
    setRanking(ordenado);
  }, []);

  return (
    <div>
      <h2>🏅 Leaderboard de Compras</h2>
      {ranking.length === 0 ? (
        <p>No hay datos aún.</p>
      ) : (
        <ol>
          {ranking.map((entry, i) => (
            <li key={i}>
              {entry.usuario}: ${entry.total}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Leaderboard;
