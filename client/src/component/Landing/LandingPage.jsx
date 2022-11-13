import React from "react";
import Landing from "../Landing/Landing.module.css";
import { Link } from "react-router-dom";
import charmander from "../../img/charmander.gif";



const landingPage = () => {
  return (
    <div >
      <img className={Landing.fondo} src={charmander} alt="imagen desaperida" />

      <div >
        <Link to="/principal">
          <button className={Landing.button}>soy el boton</button>
        </Link>
      </div>
    </div>
  );
};
export default landingPage;
