import { useEffect, useState } from "react";

function Toggle(){
    const [activo, setActivo]=useState(false);

    useEffect(()=>{
        
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
      //  }
    },[]);

    return(
        <button
            onClick={()=>setActivo(!activo)}>
                {activo ? "Este Boton esta activo": "Inactivo"}
            </button>
    )
}
export default Toggle;