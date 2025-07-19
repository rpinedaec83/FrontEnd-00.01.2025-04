import { useState } from "react";

export default function InputData(){
    const [texto, setTexto] = useState("");

    const handleChange = (e)=>{
        setTexto(e.target.value);
    }
    return(
        <>
            <input type="text" onChange={handleChange} value={texto} />
            <p>Escribiste: {texto}</p>
        </>
    )
}