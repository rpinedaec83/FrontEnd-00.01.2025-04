import React from "react";
import ListaPerfiles from "./ListaPerfiles";
import Catalogo from "./Catalogo";

function Card() {

    return (
        <div>
            <div>
                <h1>Lista de Perfiles</h1>
                <ListaPerfiles />
            </div>
            <div>
                <h1>Catalogo</h1>
                <Catalogo />
            </div>
        </div>

    );
}

export default Card;