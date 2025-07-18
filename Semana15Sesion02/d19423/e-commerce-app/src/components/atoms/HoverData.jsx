import { useState } from "react";

export default function HoverData(){
    const [msg , setMsg] = useState("Pasa el mouse");

    return(
        <div onMouseEnter={()=>setMsg("Ingresaste a mi dev")} onMouseLeave={()=>setMsg("Adios")}>
            <p>{msg}</p>
        </div>
    )
}