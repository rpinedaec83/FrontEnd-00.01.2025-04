import Perfil from './Perfil';

function ListaPerfiles({ datos }) {
  return (
    <div style={{display: 'flex', gap: '1rem' , justifyContent: 'center'}}>
      {datos.map((persona, index) => (
        <Perfil
          key={index}
          nombre={persona.nombre}
          rol={persona.rol}
          imagen={persona.imagen}
        />
      ))}
    </div>
  );
}

export default ListaPerfiles;
