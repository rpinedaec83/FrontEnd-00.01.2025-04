import { useEffect, useState } from "react";

function Formulario(){
    const [nombre, setNombre] = useState("");

    useEffect(()=>{
        if(nombre.length > 3)
            console.log("Mandar a buscar "+ nombre);
        // return()=>{
        //     console.log("Componente Desmontado")
        // }
    },[nombre]);

    return(
        <input value={nombre}
        onChange={(e)=> setNombre(e.target.value)} 
        placeholder="Escribe tu nombre"/>
    );
}

export default Formulario;