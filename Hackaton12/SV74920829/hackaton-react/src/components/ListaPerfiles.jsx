import Perfil from './Perfil';

function ListaPerfiles({ data }) {
    return (
        <div className="lista-perfiles">
            {data.map((perfil, index) => (
                <Perfil key={index} {...perfil} />
            ))}
        </div>
    );
}

export default ListaPerfiles;
