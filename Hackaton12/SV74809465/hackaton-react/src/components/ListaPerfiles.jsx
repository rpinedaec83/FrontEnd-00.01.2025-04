import React from 'react'
import Perfil from './Perfil'

const datosPerfiles = [
  {
    nombre: "Ana López",
    rol: "Frontend Developer",
    imagen: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    nombre: "Carlos Pérez",
    rol: "Backend Developer",
    imagen: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    nombre: "Lucía Gómez",
    rol: "UX Designer",
    imagen: "https://randomuser.me/api/portraits/women/47.jpg"
  }
];

function ListaPerfiles() {
    return (
        <div className='lista-perfiles'>
            {datosPerfiles.map((perfil, idx) => (
                <Perfil
                    key={idx}
                    nombre={perfil.nombre}
                    rol={perfil.rol}
                    imagen={perfil.imagen}
                />
            ))}
        </div>
    )
}
export default ListaPerfiles;