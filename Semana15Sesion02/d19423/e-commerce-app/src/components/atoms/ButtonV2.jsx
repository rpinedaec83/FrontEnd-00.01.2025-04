export default function ButtonV2(){

    const handleClick = (nombre)=>{
        alert("Hizo Click "+ nombre )
    }

    return <button onClick={()=>handleClick("Roberto")}>Click</button>
}