import { useState, useEffect } from "react";
import axios from 'axios';

export default function ProductTable() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res)
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError("Error en cargar los productos")
                setLoading(false)

            })
    }, [])

    if (error) return <p>{error}</p>
    if (loading) return <p>Cargando productos...</p>

    return (
        <div className="container mt-4">
            <h2>Tabla de Productos</h2>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td><img src={product.image} alt={product.title} height={50} /></td>
                                <td>{product.title}</td>
                                <td>S./ {product.price}</td>
                                <td>{product.category}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}