import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../molecules/ProductCard';

export default function ProductList(){
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { cat } = useParams();


    useEffect(() => {
        const url = cat
          ? `https://fakestoreapi.com/products/category/${encodeURIComponent(cat)}`
          : 'https://fakestoreapi.com/products';
      
        console.log("estoy funcionando");
      
        setLoading(true); 
        setError(null);    
      
        axios.get(url)
          .then(res => {
            console.log("Productos recibidos:", res.data);
            setProducts(res.data);
            setLoading(false);
          })
          .catch(err => {
            console.error(err);
            setError("Error en cargar los productos");
            setLoading(false);
          });
      
      }, [cat]);
      

    if(error) return <p>{error}</p>
    if(loading) return <p className='container'>Cargando productos...</p>
    return (
        <div className='container mt-4'>
            <h2 className='mb-4'>Lista de Productos</h2>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3'>
                {products.map(product => (
                    <div className="col" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

