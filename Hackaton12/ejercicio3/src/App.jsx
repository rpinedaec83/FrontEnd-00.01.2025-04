import Catalogo from './Catalogo';

function App() {
  const productos = [
    { nombre: "Laptop Xtreme", descripcion: "16GB RAM, 512GB SSD, Ryzen 7", precio: 3299.99 },
    { nombre: "Mouse Gamer RGB", descripcion: "Sensor óptico 16000 DPI", precio: 145.20 },
    { nombre: "Teclado Mecánico", descripcion: "Switches azules", precio: 240 }
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Catálogo de Productos</h1>
      <Catalogo productos={productos} />
    </div>
  );
}

export default App;
