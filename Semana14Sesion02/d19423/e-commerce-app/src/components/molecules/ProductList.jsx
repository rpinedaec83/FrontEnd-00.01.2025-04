import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../styles/ProductList.css'
import ProductCard from '../atoms/ProductCard';

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res)
                setProducts(res.data)
            })
            .catch(err => console.error(err))
    }, [])

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