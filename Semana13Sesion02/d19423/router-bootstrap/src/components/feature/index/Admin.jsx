import { useAuth } from "../auth/AuthContext";

export default function Admin(){
    const {logout} = useAuth();

    return(
        <div>
            <h1>Area Administrativa</h1>
            <button className="btn btn-danger mt-3" onClick={logout}>
                Cerrar Sesion
            </button>
        </div>
    )
}