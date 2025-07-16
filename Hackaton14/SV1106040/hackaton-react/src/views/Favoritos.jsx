import { useFavoritos } from '../hooks/useFavoritos';
import ProductCard from '../components/ProductCard';

const Favoritos = () => {
  const { favoritos } = useFavoritos();

  if (favoritos.length === 0) return <h4>Aún no tienes favoritos ❤️.</h4>;

  return (
    <div className="row">
      {favoritos.map((p) => (
        <div className="col-md-4 mb-4 d-flex" key={p.id}>
          <ProductCard producto={p} />
        </div>
      ))}
    </div>
  );
};

export default Favoritos;
