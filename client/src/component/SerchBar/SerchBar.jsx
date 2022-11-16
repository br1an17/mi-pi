import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemones } from "../../actions/actions";

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
              type="text"
              placeholder="nombre del pokemon"
              onChange={handleInput}
              value={input}
        
            />
            <button
              type="submit"
              onClick={handleSubmit}
      
            > buscar
            </button>
          </div>
        );


}

export default SerchBar;



