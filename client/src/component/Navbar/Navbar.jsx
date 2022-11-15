import React from "react";
import { Link } from "react-router-dom";
import Style from "./Style.module.css"


const Navbar= () =>{
    return (
    <div className={Style.search}>
  
  <input type="text" className ={Style.input}  /> 
   <button classname ={Style.searchButton}> Buscar </button>
   <Link to="/create" >
          <div className={Style.botonCreate}> </div>
          </Link>
    
    </div>)
}
export default  Navbar;