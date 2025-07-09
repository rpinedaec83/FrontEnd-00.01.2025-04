import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="text-center mt-5">
      <h1 className="display-4 mb-4">Inicio</h1>
      <button className="btn btn-primary" onClick={() => navigate('/productos')}>
        Ver Productos
      </button>
    </div>
  )
}
