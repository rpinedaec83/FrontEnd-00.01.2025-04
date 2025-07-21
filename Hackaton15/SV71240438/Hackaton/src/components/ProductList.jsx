import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al cargar productos", error));
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid gray",
              padding: "1rem",
              width: "200px",
            }}
          >
            <h4>{product.title}</h4>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
