import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams} from "react-router-dom";
import { Detalles } from "../../redux/actions/actions";
import Styles from "./Card.module.css"

export default function Card() {
 const dispatch = useDispatch()


 let {id} = useParams()
 useEffect(() => {
   dispatch(Detalles(id))
 }, [dispatch,id])
 
 const pokeDetalle =useSelector(state=>state.pokeDetalle)
    return(
        <>
        {Object.keys(pokeDetalle).length
 
        ?<div className= {Styles.contain}>
           <img src= {pokeDetalle.image}  />
           <h1> Nombre: {pokeDetalle.name} </h1>
            <h1>Tipo: {pokeDetalle.types.toString()}</h1>
            <h2>ID:{pokeDetalle.id} </h2>
            <h2>Vida:{pokeDetalle.hp} </h2>
            <h2>Ataque:{pokeDetalle.attack} </h2>
            <h2>Defensa:{pokeDetalle.defence} </h2>
            <h2>velocidad:{pokeDetalle.speed} </h2>
            <h3>Peso:{pokeDetalle.weight} </h3>
            <h3>Altura:{pokeDetalle.height} </h3>

            <Link to = "/principal">
            <button> a principal </button>
            </Link>

     </div>
     :<h1>
        cargando
       </h1>
        }
        </>
    );
}