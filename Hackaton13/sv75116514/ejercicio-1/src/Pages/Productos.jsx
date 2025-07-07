import { useNavigate } from "react-router-dom";

function Productos (){
    const navigate= useNavigate();
    return(
        <div>
            <h1>Productos</h1>
            <button className="btn btn-primary" onClick={()=> navigate('/producto/1')}>
                Ver producto 1</button>
        </div>
    )
}

export default Productos;