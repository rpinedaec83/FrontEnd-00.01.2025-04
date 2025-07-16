import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../styles/ProductList.css'
import ProductCard from '../atoms/ProductCard';

export default function ProductList() {
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

    if(error) return <p>{error}</p>
    if(loading) return <p>Cargando productos...</p>
    return (
        <div className='container'>
            <h2>Lista de Productos</h2>
            <div className='row'>
                {
                    products.map(product => (
                      <ProductCard product={product}/>
                    ))
                }
            </div>
        </div>
    );
}