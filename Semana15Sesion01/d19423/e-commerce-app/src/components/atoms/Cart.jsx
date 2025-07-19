import { useCart } from "../../context/CartContext";
export default function Cart(){
    const { cart, removeFromCart, clearCart} = useCart();
    const total = cart.reduce((acc,item)=> acc+item.price * item.quantity, 0).toFixed(2);
    return(
        <div>
            <h2>Carrito de compras</h2>
            {
                cart.length === 0 
                ? (
                    <p>Carrito Vacio</p>
                )
                :(
                    <div>
                        {
                            cart.map(item=>(
                                <div key={item.id} style={{display:'flex', alignItems:'center', marginBottom:'10px'}}>
                                    <img src={item.image} alt={item.title} style={{width: '50px', height:'50px', objectFit:'contain', marginRight:'10px'}}/>
                                    <div style={{flex:1}}>
                                        <p>{item.title}</p>
                                        <p>
                                            {item.quantity} * ${item.price} = <strong>${(item.quantity * item.price).toFixed(2)}</strong>
                                        </p>
                                    </div>
                                    <button onClick={()=> removeFromCart(item.id)}>Eliminar</button>
                                </div>
                            ))
                        }
                        <h3>Total ${total}</h3>
                        <button onClick={()=>clearCart}>Vaciar Carrito</button>
                    </div>
                )
            }
        </div>
    )
}