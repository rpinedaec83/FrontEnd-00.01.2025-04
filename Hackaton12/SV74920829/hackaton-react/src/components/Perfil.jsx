function Perfil({ nombre, rol, imagen }) {
    return (
        <div className="perfil">
            <img src={imagen} alt={`Foto de ${nombre}`} width="100" />
            <h2>{nombre}</h2>
            <p>{rol}</p>
        </div>
    );
}

export default Perfil;
