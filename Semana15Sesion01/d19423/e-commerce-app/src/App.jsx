import ProductList from "./components/molecules/ProductList"
import ProductTable from "./components/molecules/ProductTable"
import ProductTableAdvance from "./components/molecules/ProductTableAdvance"
import SearchBar from "./components/molecules/SearchBar"
import MyContext from "./context/MyContext"
import {useContext} from 'react';
export default function App() {
  
const valor = "Hola Contexto"

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
     <SearchBar/>
     
      <ProductTableAdvance/>

   </>
  )

  // return (
  //   <MyContext.Provider value={valor}>
  //       <Hijo/>
  //   </MyContext.Provider>
  // )
}

// function Hijo(){
//   const contexto = useContext(MyContext);
//   return <p>{contexto}</p>
// }
