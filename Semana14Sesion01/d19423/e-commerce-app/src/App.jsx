import Button from "./components/Button";
import Search from "./components/Search";

export default function App() {
  
 const handleSubmit=()=>{
    alert("Enviado")
  }
const call = ()=>{
  alert("Llamando")
}

const busqueda = (e)=>{
  console.log(e.target.value)
}
  return (
    <>
     <Button label="Alertar" onClick={handleSubmit} btnStyle="btn btn-danger" />
     <Button label="Llamar" onClick={call} btnStyle="btn btn-success" btnstate />
     <br />
     <Search label="Que buscamos hoy" onClick={busqueda}/>
   </>
  )
}
