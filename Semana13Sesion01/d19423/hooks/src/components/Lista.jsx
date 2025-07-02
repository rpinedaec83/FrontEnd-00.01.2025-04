import { useEffect, useState } from "react"

function Lista(){
    const [items, setItems] = useState([]);
    const [segundos, setSegundos] = useState(0);
    useEffect(()=>{
        const intervalo = setInterval(()=>{

            console.log("Tick")
            setSegundos(segundos+1);
            if(segundos == 15){
                console.log("Tiempo terminado")
                clearInterval(intervalo);
            }
        },1000);
        return()=>{
            clearInterval(intervalo);
        }
    },[segundos])
    const agregaItem = ()=>{
        setItems([...items, `Item ${items.length + 1}`])
    }
    return(
        <>
            <p>Han pasado {segundos} segundos</p>
            <ul>
                {items.map((item, idx)=> <li key={idx}>{item}</li>)}
            </ul>
            <button onClick={agregaItem}>Agregar</button>
        </>
    )
}
export default Lista