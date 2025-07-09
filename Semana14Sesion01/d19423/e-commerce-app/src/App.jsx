import SearchBar from "./components/molecules/SearchBar"


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
     <SearchBar></SearchBar>
   </>
  )
}
