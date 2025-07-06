import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h1>🏠 Home</h1>
      <p>Bienvenido a nuestro sitio web.</p>
      <button className="btn btn-primary" onClick={() => navigate("/productos")}>
        Ir a Productos
      </button>
    </div>
  );
}

export default Home;
