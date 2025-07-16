import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function ProductList2(){
    const { addToCart} =useCart();
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

    return(
        <div>
            <h2>Productos Disponibles</h2>
            <div style={{display:'flex', flexWrap:'wrap', gap:'20px'}}>
                {products.map(prod=>(
                    <div key={prod.id} style={{border:'1px solid #ccc', padding: '10px', width:'200px'}}>
                        <img src={prod.image} alt={prod.title} style={{width:'100px', height:'100px', objectFit:'contain'}} />
                        <h4>{prod.title}</h4>
                        <p>${prod.price}</p>
                        <button onClick={()=>addToCart(prod)}>Agregar al Carrito</button>
                    </div>
                ))}
            </div>
        </div>
    )
}