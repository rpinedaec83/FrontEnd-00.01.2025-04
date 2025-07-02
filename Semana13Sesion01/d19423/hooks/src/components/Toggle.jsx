import { useEffect, useState } from "react";

function Toggle(){
    const [activo, setActivo]=useState(false);

    useEffect(()=>{
        if(activo){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        }
    },[activo]);

    return(
        <button
            onClick={()=>setActivo(!activo)}>
                {activo ? "Este Boton esta activo": "Inactivo"}
            </button>
    )
}
export default Toggle;