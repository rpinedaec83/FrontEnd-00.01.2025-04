import { useEffect, useState } from "react";

function PerfilUsuario(){

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [guardado, setGuardado] = useState(false);

    useEffect(()=>{
        if(nombre && edad){
            const perfil = {nombre, edad};
            localStorage.setItem("perfil", JSON.stringify(perfil));
            setGuardado(true);
        }
        else{
            setGuardado(false);
        }
    },[nombre, edad])

    useEffect(()=>{
        const strPerfil = localStorage.getItem('perfil');
        if(strPerfil.length !== 0){
            const perfil = JSON.parse(strPerfil);
            setNombre(perfil.nombre);
            setEdad(perfil.edad);
        }
        console.log(strPerfil)
    },[])
    return(
        <div style={{padding:'20px', fontFamily: 'Arial'}}>
            <label>
                Nombre:
                <input type="text" 
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}/>
            </label>
            <br />
            <br />
            <label>
                Edad:
                <input type="number"
                value={edad}
                onChange={(e)=>setEdad(e.target.value)}/>
            </label>
            <br /><br />
            {
                guardado ? (
                    <p style={{color:'green'}}>
                        Perfil Guardado: {nombre} {edad} años
                    </p>
                ):(
                    <p style={{color: 'gray'}}>
                        Por favor completa ambos campos para guardar
                    </p>
                )
            }
        </div>
    );
}

export default PerfilUsuario;