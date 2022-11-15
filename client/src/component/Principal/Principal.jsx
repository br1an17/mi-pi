import React from "react";
import Style from "./Style.module.css";
import { Link } from "react-router-dom";
import pikachu from "../../img/Pokemon-gifs-13.gif";
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
        
      
         <div class={Style.baground}>

          
          <>
          {pokemon.map(pokemon=> <Pokemones key={pokemon.id} pokemon={pokemon}/>)}
          </>
       
         </div>

  
          )
      }else{

  return (
   
    <div>
      <img className={Style.fondo} src={pikachu} alt="imagen rota" />
      <div>
        <Link to="/">
          <div className={Style.boton}> 
          </div>
        </Link>
      </div>
    </div>
  );
}};

export default Principal;
