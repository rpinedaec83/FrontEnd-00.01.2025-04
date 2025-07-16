import { Link } from 'react-router-dom';

export default function ProductoCard({ producto }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={producto.image} className="card-img-top p-3" alt={producto.title} style={{ height: '200px', objectFit: 'contain' }} />
        <div className="card-body">
          <h5 className="card-title">{producto.title}</h5>
          <p className="card-text">${producto.price}</p>
          <Link to={`/productos/${producto.id}`} className="btn btn-primary">Ver más</Link>
        </div>
      </div>
    </div>
  );
}
