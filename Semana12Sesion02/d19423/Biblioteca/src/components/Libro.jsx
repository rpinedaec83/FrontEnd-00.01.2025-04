import React from "react";

class Libro extends React.Component {
    render(){
        const { titulo, autor, año, onEliminar} = this.props;
        return(
            <div>
                <h3>{titulo}</h3>
                <p><b>Autor: </b>{autor}</p>
                <p><b>Año: </b>{año}</p>
                <button onClick={onEliminar}>Eliminar</button>
            </div>
        );
    }
}

export default Libro