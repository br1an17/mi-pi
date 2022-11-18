import React, { useState } from "react";
import SerchBar from "../SerchBar/SerchBar";
import Pokemones from "../Pokemon/Pokemones";
import Style from "./Principal.module.css" 

import Paginado from "../Paginado/Paginado";
import { useSelector } from "react-redux";




const Principal = () => {
const pito =useSelector(state =>state.pokeDetalle)
console.log(pito)

  return (
      <div >
        <div className={Style.baground} >
         <SerchBar/>
          <div>
          <Paginado />

          <Pokemones />
          </div>
        </div>
      </div>
  )}

export default Principal;
