import React from "react";
import { useDispatch } from "react-redux";
import { filtroCreado } from "../../redux/actions/actions";

 const BotonCreado = ({ setCreado, creado }) => {
  const dispatch = useDispatch();

  function handleFiltro(ev) {
    setCreado(!creado);
    // if (ev.target.value === "existente" || ev.target.value === "creado")
      ev.preventDefault();
    dispatch(filtroCreado(ev.target.value));
  }
  return (
    <select onChange={handleFiltro}>
      <option>filtro creado</option>
      <option value="creado"> creado</option>
      <option value="existente">existente</option>
    </select>
  );
};
export default BotonCreado; 

