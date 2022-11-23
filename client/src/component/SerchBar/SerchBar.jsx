import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNamePokemones } from "../../redux/actions/actions";
import Style from "./Serchbar.module.css"

const SerchBar = ()=>{

        const dispatch = useDispatch();
        const [input, setInput] = useState("");
      
        const handleInput = (e) => {
          setInput(e.target.value);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          dispatch(getNamePokemones(input));
          setInput("");
        };


      
        return (
          <div>
            <input
            className={Style.serch}
              type="text"
              placeholder="nombre del pokemon"
              onChange={handleInput}
              value={input}
        
            />
            <button
            className={Style.boton}
              type="submit"
              onClick={handleSubmit}
      
            > Buscar
            </button>
          </div>
        );


}

export default SerchBar;



