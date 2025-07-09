import { NavLink, Routes, Route } from "react-router-dom";
import Contador from "./components/Contador";
import Temporizador from "./components/Temporizador";
import Usuarios from "./components/Usuarios";
import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <NavLink className="navbar-brand" to="/">MiniApp</NavLink>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contador">Contador</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/temporizador">Temporizador</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/usuarios">Usuarios</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/temporizador" element={<Temporizador />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </>
  );
}

export default App;

