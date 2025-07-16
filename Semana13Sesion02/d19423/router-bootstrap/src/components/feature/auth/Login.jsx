import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin=()=>{
        login();
        navigate('/admin')
    }
    return(
        <div>
            <h1>Iniciar Sesion</h1>
            <button className="btn btn-success" onClick={handleLogin}>
                Iniciar Sesion
            </button>
        </div>
    )
}