import { useParams, useNavigate } from "react-router-dom";

export default function Profile(){
    const {username} = useParams();
    const navigate = useNavigate();

    return(
        <div>
            <h1>Perfil de {username}</h1>
            <button className="btn btn-primary mt-3" onClick={()=>navigate('/')}>
                Volver al inicio
            </button>
        </div>
    )
}