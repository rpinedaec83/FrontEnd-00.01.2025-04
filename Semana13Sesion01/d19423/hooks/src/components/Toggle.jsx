import { useState } from "react";

function Toggle(){
    const [activo, setActivo]=useState(false);
    return(
        <button
            onClick={()=>setActivo(!activo)}>
                {activo ? "Este Boton esta activo": "Inactivo"}
            </button>
    )
}
export default Toggle;