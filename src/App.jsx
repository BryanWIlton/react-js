import React from "react";
import Button from "./components/Button";

import "./App.css"

export default () => {
    
    return (
        <div>
            <h1>Titulo</h1>
            <ul>
                <Button id='oi'>Sobre</Button>
                <Button>Mais</Button>
                <Button>Outros</Button>
                <Button>Enviar</Button>
            </ul>
            
        </div>
    )
}