import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext"; // 👈 Importar


export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites(); // Importa el contexto de favoritos
  const [liked, setLiked] = useState(false);

  const precioCompleto =
    typeof product.price === "number"
      ? product.price.toFixed(2)
      : parseFloat(product.price).toFixed(2);

  function toggleLike(event) {
    event.preventDefault();
    setLiked(!liked);
    addToFavorites(product); // Agrega el producto a favoritos
  }

  return (
    <div className="card h-100">
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top p-2"
        style={{ height: "180px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="card-title">{product.title}</h5>
          <a href="#" onClick={toggleLike}>
            <i
              className={`bi fs-5 ${liked ? "bi-heart-fill text-danger" : "bi-heart"}`}
            ></i>
          </a>
        </div>

        <p className="card-text fw-bold">S/. {precioCompleto}</p>
        <button
          className="btn btn-primary mt-2"
          onClick={() => addToCart(product)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
