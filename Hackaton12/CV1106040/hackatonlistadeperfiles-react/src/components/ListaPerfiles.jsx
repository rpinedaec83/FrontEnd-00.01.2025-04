import Perfil from './Perfil';

function ListaPerfiles({ perfiles }) {
  return (
    <div className="lista-perfiles">
      {perfiles.map((p, index) => (
        <Perfil
          key={index}
          nombre={p.nombre}
          rol={p.rol}
          imagen={p.imagen}
        />
      ))}
    </div>
  );
}

export default ListaPerfiles;
