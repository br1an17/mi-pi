import React, { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Navbar.module.css";





const Navbar = () => {

  return (
    <div className={Style.nav}>
      <nav className={Style.search}>
        <Link to="/" className={Style.botonPage}>
          <div className={Style.Texto}>inicio </div>
        </Link>
        <Link to="/create" className={Style.botonCreate}>
          <div className={Style.Texto}> Formulario</div>
        </Link>
        <Link to ="/principal"className ={Style.botonPrincipal}>
        <div className= {Style.Texto}> Principal </div>
        </Link>
   

      </nav>
    </div>
  );
};
export default Navbar;
