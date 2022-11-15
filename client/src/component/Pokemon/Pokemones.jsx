import React from "react";
import Style from "./Style.module.css"

const Pokemones= ({pokemon}) =>{
    return (
    <div  className={Style.contain}>
        <img  src = {pokemon.image}  alt = "imagen del pokemon" className = {Style.portada}/>
    <h1> {pokemon.name} </h1>

    <h1>  {pokemon.types}</h1>
    
    </div>)
}
export default  Pokemones