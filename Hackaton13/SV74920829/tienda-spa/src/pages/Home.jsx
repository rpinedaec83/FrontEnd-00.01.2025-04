// src/pages/Home.jsx
import Contador from '../components/Contador';
import Temporizador from '../components/Temporizador';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  // Estado para almacenar productos destacados
  const [destacados, setDestacados] = useState([]);

  // Fetch a la API para obtener productos y seleccionar 3 aleatorios al montar el componente
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        const productosAleatorios = data.sort(() => 0.5 - Math.random()).slice(0, 3);
        setDestacados(productosAleatorios);
      });
  }, []);

  return (
    <div>
      {/* Banner promocional */}
      <div className="bg-dark text-white p-5 rounded mb-4 text-center">
        <h1>🔥 ¡Ofertas de Verano!</h1>
        <p>Hasta 50% de descuento en toda la tienda</p>
        <Link to="/productos" className="btn btn-warning mt-3">Ver Productos</Link>
      </div>

      {/* Beneficios destacados */}
      <div className="row text-center mb-4">
        {/* Envío gratis */}
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">🚚 Envío Gratis</h5>
              <p className="card-text">En pedidos mayores a $100</p>
            </div>
          </div>
        </div>
        {/* Pago seguro */}
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">🔒 Pago Seguro</h5>
              <p className="card-text">Protección de datos y seguridad</p>
            </div>
          </div>
        </div>
        {/* Garantía */}
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">⭐ Garantía</h5>
              <p className="card-text">Satisfacción garantizada o reembolso</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de productos destacados */}
      <h3 className="mb-3">✨ Productos Destacados</h3>
      <div className="row mb-5">
        {/* Muestra los productos seleccionados con imagen, título, precio y enlace a detalle */}
        {destacados.map((producto) => (
          <div className="col-md-4" key={producto.id}>
            <div className="card h-100">
              <img
                src={producto.image}
                alt={producto.title}
                className="card-img-top p-3"
                style={{ height: '250px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p>s/{producto.price}</p>
                <Link to={`/producto/${producto.id}`} className="btn btn-primary">Ver más</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Categorías populares con enlaces para filtrar productos */}
      <h3 className="mb-3">🎯 Categorías Populares</h3>
      <div className="row mb-5">
        {['electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'].map((cat, index) => (
          <div className="col-md-3" key={index}>
            <div className="card h-100 text-center bg-light">
              <div className="card-body">
                <h6 className="card-title text-capitalize">{cat}</h6>
                <Link to="/productos" className="btn btn-outline-secondary btn-sm">Ver productos</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Zona de prueba con componentes interactivos Contador y Temporizador */}
      <div className="mb-5">
        <h4>🧪 Zona de prueba</h4>
        <p>Prueba componentes de React:</p>
        <Contador />
        <Temporizador />
      </div>
    </div>
  );
}