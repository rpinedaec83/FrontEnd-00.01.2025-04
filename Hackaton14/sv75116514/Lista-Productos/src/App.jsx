import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/organims/NavBar"
import ProductList from "./components/organims/ProductList";

function App(){
  return(
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path='/category/:cat' element={<ProductList/>}/>
      <Route path="*" element={<h3 className="text-center mt-5">404 – Página no encontrada</h3>} />
    </Routes>

    </>
  )
};

export default App;