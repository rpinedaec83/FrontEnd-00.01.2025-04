import ProductList from "./components/molecules/ProductList"
import ProductTable from "./components/molecules/ProductTable"
import ProductTableAdvance from "./components/molecules/ProductTableAdvance"
import SearchBar from "./components/molecules/SearchBar"
import MyContext from "./context/MyContext"
import { useContext } from 'react';

import { CartProvider } from "./context/CartContext"
import ProductList2 from "./components/molecules/ProductList2"
import Cart from "./components/atoms/Cart"
import ButtonV2 from "./components/atoms/ButtonV2"
import InputData from "./components/atoms/InputData"
import FormData from "./components/atoms/FormData"
import HoverData from "./components/atoms/HoverData"
import NombreData from "./components/atoms/NombreData"
import DarkMode from "./components/atoms/DarkMode"
import ToDoApp from "./components/atoms/ToDoApp"

export default function App() {

  const valor = "Hola Contexto"

  const handleSubmit = () => {
    alert("Enviado")
  }
  const call = () => {
    alert("Llamando")
  }

  const busqueda = (e) => {
    console.log(e.target.value)
  }
  // return (
  //   <>
  //    <SearchBar/>

  //     <ProductTableAdvance/>

  //  </>
  // )

  // return (
  //   <MyContext.Provider value={valor}>
  //       <Hijo/>
  //   </MyContext.Provider>
  // )
  return(
    <CartProvider>
      <div style={{padding:'20px', maxWidth:'900px',margin:'0 auto'}}>
        <h1>Tiendita de barrio</h1>
        <ProductList2/>
        <hr />
        <Cart/>
      </div>
    </CartProvider>
  )
  // return(
  //   <ButtonV2 />
  // )

  // return (
  //   <InputData/>
  // )
  // return(
  //     <HoverData/>
  // )
  // return(
  //   <NombreData/>
  // )
  // return(
  //   <DarkMode/>
  // )
  // return(
  //   <ToDoApp/>
  // )
}

// function Hijo(){
//   const contexto = useContext(MyContext);
//   return <p>{contexto}</p>
// }
