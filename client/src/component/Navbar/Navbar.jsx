import React from "react";
import { Link } from "react-router-dom";
import Style from "./Navbar.module.css";

const Navbar = () => {
  return (
   
        <nav className={Style.nav}>
          <Link to="/" className={Style.botonPage} >
          <h3>Inicio</h3>
          </Link>
          <Link to="/principal" className={Style.botonPrincipal}>
          <h3>Principal</h3>
          </Link>
          <Link to="/create" className={Style.botonCreate}>
          <h3>NuevoPoke</h3> 
          </Link>
          <Link to="/About" className={Style.botonAbout}>
          <h3>Descripcion</h3> 
          </Link>
        </nav>
  );
};
export default Navbar;
