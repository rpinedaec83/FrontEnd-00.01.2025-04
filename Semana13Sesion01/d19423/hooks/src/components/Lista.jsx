import { useState } from "react"

function Lista(){
    const [items, setItems] = useState([]);

    const agregaItem = ()=>{
        setItems([...items, `Item ${items.length + 1}`])
    }
    return(
        <>
            <ul>
                {items.map((item, idx)=> <li key={idx}>{item}</li>)}
            </ul>
            <button onClick={agregaItem}>Agregar</button>
        </>
    )
}
export default Lista