import React from 'react';
import './cita.module.css';



function Cita(props){

  function confirmar(){
    alert("Confirmas")
  }
  return(
    <>
      <div className="cita">
        <p>Hola, tienes una cita con {props.nombre}</p>
        <button onClick={confirmar}>Click Me</button>
      </div>
    </>
  )
}

export default Cita;
