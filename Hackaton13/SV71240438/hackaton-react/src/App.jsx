import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Productos from "./pages/Productos";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/acerca" element={<Acerca />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
