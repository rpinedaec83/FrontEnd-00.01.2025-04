import Perfil from './Perfil';

function ListaPerfiles({ data }) {
  return (
    <div className="lista-perfiles">
      {data.map((persona, i) => (
        <Perfil
          key={i}
          nombre={persona.nombre}
          rol={persona.rol}
          imagen={persona.imagen}
        />
      ))}
    </div>
  );
}

export default ListaPerfiles;