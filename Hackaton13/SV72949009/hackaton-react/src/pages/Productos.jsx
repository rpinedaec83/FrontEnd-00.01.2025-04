import { useNavigate } from 'react-router-dom';
import FakeAPI from '../components/FakeAPI';

export default function Productos() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Lista de Productos</h1>
      <button className="btn btn-primary mb-4" onClick={() => navigate('/producto/1')}>
        Ver producto 1 (ruta dinámica)
      </button>
      <FakeAPI />
    </div>
  );
}