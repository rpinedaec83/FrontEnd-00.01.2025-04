import "./App.css";
import { useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  useEffect(() => {
    const handler = (e) => {
      alert(`✅ Producto agregado: ${e.detail.title}`);
    };

    document.addEventListener("productAdded", handler);

    return () => {
      document.removeEventListener("productAdded", handler);
    };
  }, []);

  return (
    <div className="App">
      <h1>Tienda Hackaton 15</h1>
      <ProductList />
      <hr />
      <Cart />
    </div>
  );
}

export default App;
