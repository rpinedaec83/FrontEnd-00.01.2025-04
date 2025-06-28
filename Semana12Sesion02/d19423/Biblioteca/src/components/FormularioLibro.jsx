import React from "react";
class FormularioLibro extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titulo:"",
            autor: "",
            año: ""
        }
    }
    manejarCambio =(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    manejarEnvio = (e)=>{
        e.preventDefault();
        this.props.onAgregar(this.state);
        this.setState({
            titulo:"",
            autor: "",
            año: ""
        })
    }
    render(){
        return(
            <form onSubmit={this.manejarEnvio}>
                <input name="titulo" value={this.state.titulo} onChange={this.manejarCambio} placeholder="Titulo" required />
                <input name="autor" value={this.state.autor} onChange={this.manejarCambio} placeholder="Autor" required />
                <input name="año" value={this.state.año} onChange={this.manejarCambio} placeholder="Año" required />
                <button type="submit">Agregar Libro</button>
            </form>
        )
    }
}

export default FormularioLibro