import { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'
import { getFeaturedProducts, getCategories } from '../api/productService'
import { useCart } from '../contexts/CartContext'

const categoryImages = {
  electronics: '/images/categoria-electronica.jpg',
  jewelery: '/images/categoria-jewelery.jpg',
  "men's clothing": '/images/categoria-hombre.jpg',
  "women's clothing": '/images/categoria-mujer.jpg',
}

const Home = () => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { addToCart } = useCart()

  useEffect(() => {
    Promise.all([getCategories(), getFeaturedProducts()])
      .then(([catsData, productsData]) => {
        setCategories(catsData)
        setProducts(productsData)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-center mt-5">Cargando datos...</p>
  if (error) return <p className="text-center mt-5 text-danger">Error al cargar datos.</p>

  return (
    <>
      {/* Banner principal */}
      <section className="bg-primary text-white text-center py-5 mb-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Bienvenido a Mi Tienda</h1>
          <p className="lead mb-4">Los mejores productos al mejor precio</p>
          <Link to="/productos" className="btn btn-light btn-lg">
            Explorar productos
          </Link>
        </div>
      </section>

      {/* Categorías dinámicas */}
      <section className="container mb-5">
        <h2 className="mb-4">Categorías populares</h2>
        <div className="row g-4">
          {categories.map(cat => (
            <div key={cat} className="col-md-3 text-center">
              <Link to={`/productos?categoria=${encodeURIComponent(cat)}`} className="text-decoration-none text-dark">
                <h5 style={{ textTransform: 'capitalize' }}>{cat}</h5>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Productos destacados */}
      <section className="container mb-5">
        <h2 className="mb-4">Productos destacados</h2>
        <div className="row g-4">
          {products.map(product => (
            <div key={product.id} className="col-sm-6 col-md-3">
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    {product.title.length > 40
                      ? product.title.slice(0, 40) + '...'
                      : product.title}
                  </h5>
                  <p className="card-text text-success fw-bold">S/{product.price.toFixed(2)}</p>
                  <Link to={`/producto/${product.id}`} className="btn btn-primary mt-auto">
                    Ver detalle
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light text-center py-4">
        <div className="container">
          <small>© 2025 Mi Tienda. Todos los derechos reservados.</small>
        </div>
      </footer>
    </>
  )
}

export default Home
