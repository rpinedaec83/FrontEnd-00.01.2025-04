import { useEffect, useState } from 'react';

export default function Leaderboard() {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('userTotals')) || {};
    const sorted = Object.entries(users).sort((a, b) => b[1] - a[1]);
    setRanking(sorted);
  }, []);

  return (
    <div>
      <h2>🏆 Ranking de Compradores</h2>
      {ranking.length === 0 ? (
        <p>No hay compras registradas.</p>
      ) : (
        <ol>
          {ranking.map(([user, total], index) => (
            <li key={index}>
              {user}: S/{total.toFixed(2)}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
