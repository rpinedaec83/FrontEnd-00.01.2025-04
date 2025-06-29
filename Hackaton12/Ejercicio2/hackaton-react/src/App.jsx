import Perfil from './Perfil';

function App() {
  const perfiles = [
    { nombre: "Percy", rol: "Ingeniera de Datos", imagen: "https://i.pravatar.cc/100?u=ana" },
    { nombre: "Luis", rol: "Desarrollador Frontend", imagen: "https://i.pravatar.cc/100?u=luis" },
    { nombre: "Sofía", rol: "Diseñadora UX", imagen: "https://i.pravatar.cc/100?u=sofia" }
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Equipo de Proyecto</h1>
      <div className="lista-perfiles">
        {perfiles.map((persona, index) => (
          <Perfil
            key={index}
            nombre={persona.nombre}
            rol={persona.rol}
            imagen={persona.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default App;