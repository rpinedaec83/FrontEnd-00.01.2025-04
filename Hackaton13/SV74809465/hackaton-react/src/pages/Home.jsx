import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <div>
        <h1>Inicio</h1>
        <p>Bienvenido a la página principal.</p>
        <button onClick={() => navigate('/productos')} className="btn btn-primary">
          Ver productos
        </button>
      </div>
      
    </>
  )
}

export default Home