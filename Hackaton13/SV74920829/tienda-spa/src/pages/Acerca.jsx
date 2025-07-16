// src/pages/Acerca.jsx
import { Link } from 'react-router-dom';

export default function Acerca() {
  return (
    <div className="container">
      {/* Título principal y subtítulo */}
      <div className="text-center mb-5">
        <h1>Sobre Nosotros</h1>
        <p className="lead">Conoce quiénes somos y por qué amamos lo que hacemos</p>
      </div>

      {/* Sección con la historia de la tienda y una imagen */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          {/* Texto sobre la historia */}
          <h4>Nuestra Historia</h4>
          <p>
            Fundada en 2024, nuestra tienda nació con el objetivo de ofrecer productos de calidad
            a precios accesibles. Comenzamos como un pequeño emprendimiento local y hoy llegamos a
            todo el país.
          </p>
          <p>
            Valoramos la honestidad, el buen servicio y la innovación. Cada producto que ves ha sido
            seleccionado pensando en ti.
          </p>
        </div>
        <div className="col-md-6">
          {/* Imagen representativa de la tienda */}
          <img
            src="https://grupoprom.com/wp-content/uploads/2024/09/que-es-una-tienda-retail.jpg"
            alt="Tienda"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Sección de misión, visión y valores con íconos y estilos */}
      <div className="row text-center mb-5">
        <div className="col-md-4">
          <h5 className="text-primary">🎯 Misión</h5>
          <p>Ofrecer productos únicos y accesibles que mejoren la vida de nuestros clientes.</p>
        </div>
        <div className="col-md-4">
          <h5 className="text-success">🔭 Visión</h5>
          <p>Convertirnos en la tienda en línea favorita de Latinoamérica.</p>
        </div>
        <div className="col-md-4">
          <h5 className="text-warning">💡 Valores</h5>
          <p>Calidad, confianza, innovación y atención al cliente.</p>
        </div>
      </div>

      {/* Botones para navegar a Productos y volver al inicio */}
      <div className="text-center">
        <Link to="/productos" className="btn btn-outline-primary btn-lg">
          Ver Productos
        </Link>
        <br /><br />
        <Link to="/" className="btn btn-link">Volver al inicio</Link>
      </div>
    </div>
  );
}
