import React from "react";
import { Link } from "react-router-dom";
import Style from "./Navbar.module.css"


const Navbar= () =>{
    return (
        <div className={Style.nav}>
           
        <nav className={Style.search}>
    
      <Link to='/'className={Style.botonPage} >
      {/* <div className={Style.texto}>Pagina Principal </div> */}
      </Link>
      <Link to='/create' className={Style.botonCreate}>
       {/* <div className={Style.Texto}>Crear pokemon</div> */}
      </Link>
     
    </nav>
    </div>
   )
}
export default  Navbar;
