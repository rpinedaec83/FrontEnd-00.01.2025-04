import { useState } from "react";

export default function FormData(){
    const [nombre, setNombre] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        alert(`Hola ${nombre}`)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input value={nombre} onChange={e=>setNombre(e.target.value)} placeholder="Escribe tu Nombre"/>
            <button type="submit">Enviar</button>
        </form>
    )

}