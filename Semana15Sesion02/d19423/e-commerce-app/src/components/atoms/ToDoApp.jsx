import { useEffect, useState } from "react";

export default function ToDoApp(){
    const [tareas, setTareas] = useState(()=>JSON.parse(localStorage.getItem('tareas')) || []);
    const [texto, setTexto] = useState('');

    useEffect(()=>{
        localStorage.setItem('tareas',JSON.stringify(tareas))
    },[tareas]);

    const agregarTarea=()=>{
        if(texto.trim()){
            setTareas([...tareas, {texto, id:Date.now()}]);
            setTexto('');
        }
    }

    const eliminarTarea=(id)=>{
        setTareas(tareas.filter(t=>t.id!==id));
    }

    return(
        <>
            <h2>Mis tareas</h2>
            <input value={texto} onChange={e=>setTexto(e.target.value)} placeholder="Nueva Tarea" />
            <button onClick={agregarTarea}>Agregar</button>
            <ul>
                {
                    tareas.map(t=>(
                        <li key={t.id}>
                            {t.texto} <button onClick={()=> eliminarTarea(t.id)}>❌</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}