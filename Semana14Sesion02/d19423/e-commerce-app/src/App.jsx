import ProductList from "./components/molecules/ProductList"
import ProductTable from "./components/molecules/ProductTable"
import ProductTableAdvance from "./components/molecules/ProductTableAdvance"
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
     
      <ProductTableAdvance/>

   </>
  )
}
