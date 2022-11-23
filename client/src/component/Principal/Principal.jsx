import React, { useState } from "react";
import SerchBar from "../SerchBar/SerchBar";
import Pokemones from "../Pokemon/Pokemones";
import Style from "./Principal.module.css";
import Paginado from "../Paginado/Paginado";
import BotonNombre from "../BotonNombre/BotonNombre";
import { BotonPoder } from "../BotonPoder/BotonPoder";
import BotonTipo from "../BotonTipo/BotonTipo";
import BotonCreado from "../BotonCreado/BotonCreado";

const Principal = () => {
  const [creado, setCreado] = useState(false);
  const [order, setOrder] = useState(false);
  const [Maxmin, setMaxMin] = useState(false);
  const [render, setRender] = useState(false);
  return (
    <div>
      <div className={Style.fondo}>
        <SerchBar />
        <div>
          <BotonCreado setCreado={setCreado} creado={creado} />
          <BotonNombre setOrder={setOrder} order={order} />
          <BotonPoder setMaxMin={setMaxMin} Maxmin={Maxmin} />
          <BotonTipo />

          <button
            onClick={() => window.location.reload()}
            className={Style.boton}
          >
            Recargar
          </button>
      
           <Paginado  setRender={setRender} render={render} />
         
          <Pokemones />
        </div>
      </div>
    </div>
  );
};

export default Principal;
