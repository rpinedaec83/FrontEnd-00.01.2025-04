import React from "react";
import Libro from "./Libro";
import FormularioLibro from "./FormularioLibro";

class Biblioteca extends React.Component{
    constructor(props){
        super(props);
        this.state={
            libros: []
        };
        console.log("Constructor de la Biblioteca")
    }
    componentDidMount(){
        console.log("Biblioteca Montada");
        //llama a las apis
    }

    componentDidUpdate(){
        console.log("Biblioteca actualizada", this.state.libros);
    }

    componentWillUnmount(){
        console.log("Biblioteca desmontada")
    }

    agregarLibro = (nuevoLibro)=>{
        this.setState({
            libros:[...this.state.libros, nuevoLibro]
        })
    }

    eliminarLibro = (indice)=>{
        const nuevaLista = [...this.state.libros];
        nuevaLista.splice(indice,1);
        this.setState({libros:nuevaLista})
    }

    render(){
        return(
            <div>
                <h1>Mi Biblioteca</h1>
                <FormularioLibro onAgregar={this.agregarLibro} />
                <p>Total de Libros: {this.state.libros.length}</p>
                {
                   
                    this.state.libros.map((libro, i)=>(
                        
                        <Libro
                        key={i}
                        titulo={libro.titulo}
                        autor={libro.autor}
                        año = {libro.año}
                        onEliminar={()=>this.eliminarLibro(i)}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Biblioteca;
