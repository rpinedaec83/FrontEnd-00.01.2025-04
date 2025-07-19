import { useEffect, useState } from 'react';
import { Row, Col, Form, Spinner, Alert, Button } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estado de paginación
  const [pagina, setPagina] = useState(1);
  const productosPorPagina = 8;

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProductos(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar productos');
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategorias(data));
  }, []);

  // Aplicar filtros
  const productosFiltrados = productos.filter((p) => {
    const coincideBusqueda = p.title.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaSeleccionada ? p.category === categoriaSeleccionada : true;
    return coincideBusqueda && coincideCategoria;
  });

  // Calcular productos paginados
  const inicio = (pagina - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPaginados = productosFiltrados.slice(inicio, fin);
  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

  const cambiarPagina = (delta) => {
    setPagina((prev) => Math.min(Math.max(prev + delta, 1), totalPaginas));
  };

  // Resetear a página 1 si cambian filtros
  useEffect(() => {
    setPagina(1);
  }, [busqueda, categoriaSeleccionada]);

  if (loading) {
    return (
      <div className="text-center mt-4">
        <Spinner animation="border" />
        <span className="ms-2">Cargando productos...</span>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <>
      <h2>Productos</h2>

      {/* Filtros */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Form.Select
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      {/* Lista de productos */}
      <Row xs={1} md={2} lg={4} className="g-4">
        {productosPaginados.map((producto) => (
          <Col key={producto.id}>
            <ProductCard producto={producto} />
          </Col>
        ))}
      </Row>

      {/* Controles de paginación */}
      {totalPaginas > 1 && (
        <div className="d-flex justify-content-center align-items-center my-4 gap-2">
          <Button
            variant="secondary"
            size="sm"
            disabled={pagina === 1}
            onClick={() => cambiarPagina(-1)}
          >
            Anterior
          </Button>
          <span>Página {pagina} de {totalPaginas}</span>
          <Button
            variant="secondary"
            size="sm"
            disabled={pagina === totalPaginas}
            onClick={() => cambiarPagina(1)}
          >
            Siguiente
          </Button>
        </div>
      )}
    </>
  );
}
