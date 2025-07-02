import { useState } from "react";

function Formulario(){
    const [nombre, setNombre] = useState("");

    return(
        <input value={nombre}
        onChange={(e)=> setNombre(e.target.value)} 
        placeholder="Escribe tu nombre"/>
    );
}

export default Formulario;