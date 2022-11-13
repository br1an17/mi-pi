import React from "react";
import Princ from "./Princ.module.css";
import { Link } from "react-router-dom";
import pokePrincipales from "../../img/Fondo.jpg";
import { useDispatch ,useSelector} from "react-redux";
import {getPokemones} from "../../redux/actions";
import Pokemones from "../Pokemon/Pokemones"
import { useEffect } from "react";


const Principal = () => {


      const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokemon)
      useEffect(() => {
        dispatch(getPokemones())
      },[])
      
      if(pokemon.length){
        return(
          <>
          {pokemon.map(pokemon=> <Pokemones key={pokemon.id} pokemon={pokemon}/>)}
          </>
        
          )
      }else{

  return (
   
    <div>
      <img className={Princ.fondo} src={pokePrincipales} alt="imagen rota" />
      <div>
        <Link to="/">
          <div className={Princ.boton}> 
          </div>
        </Link>
      </div>
    </div>
  );
}};

export default Principal;
