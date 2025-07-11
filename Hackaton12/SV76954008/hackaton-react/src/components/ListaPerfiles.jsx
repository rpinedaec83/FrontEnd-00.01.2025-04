import Perfil from './Perfil';

const datos = [
  { nombre: 'Ana', rol: 'Frontend Developer', imagen: 'https://images.unsplash.com/photo-1616002411355-49593fd89721?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm90byUyMGNoaWNhfGVufDB8fDB8fHww' },
  { nombre: 'Luis', rol: 'Backend Developer', imagen: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tYnJlJTIwZXNwYSVDMyVCMW9sfGVufDB8fDB8fHww' },
  { nombre: 'Carla', rol: 'Fullstack Developer', imagen: 'https://img.freepik.com/foto-gratis/mujer-joven-hermosa-sueter-rosa-calido-aspecto-natural-sonriente-retrato-aislado-cabello-largo_285396-896.jpg?semt=ais_hybrid&w=740' },
];

function ListaPerfiles() {
  return (
    <div className="lista-perfiles">
      {datos.map((usuario, index) => (
        <Perfil key={index} {...usuario} />
      ))}
    </div>
  );
}
export default ListaPerfiles;