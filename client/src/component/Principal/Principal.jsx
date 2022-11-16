import React from "react";
import SerchBar from "../SerchBar/SerchBar";
import Pokemones from "../Pokemon/Pokemones";
import Style from "./Principal.module.css" 
import { useSelector } from "react-redux";

const Principal = () => {
// const pokeCard = useSelector(state=>state.pokecard)


  return (
      <div >
        <div className={Style.baground} >
         <SerchBar/>
          <div className={Style.contain}>
          <Pokemones />
          </div>
        </div>
      </div>
  )}

export default Principal;
