import React, { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Navbar.module.css";
import BotonNombre from "../BotonNombre/BotonNombre";
import { BotonPoder } from "../BotonPoder/BotonPoder";
import BotonTipo from "../BotonTipo/BotonTipo";




const Navbar = () => {

  return (
    <div className={Style.nav}>
      <nav className={Style.search}>
        <Link to="/" className={Style.botonPage}>
          <div className={Style.Texto}>Pagina Principal </div>
        </Link>
        <Link to="/create" className={Style.botonCreate}>
          <div className={Style.Texto}>Crear pokemon</div>
        </Link>
        <BotonNombre />
        <BotonPoder />
        <BotonTipo />

      </nav>
    </div>
  );
};
export default Navbar;
