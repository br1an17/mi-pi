import React from "react";
import { useDispatch } from "react-redux";
import { filtroCreado } from "../../redux/actions/actions";
import Style from "./BotonCreado.module.css";
const BotonCreado = ({ setCreado, creado }) => {
  const dispatch = useDispatch();

  function handleFiltro(ev) {
    setCreado(!creado);
    ev.preventDefault();
    dispatch(filtroCreado(ev.target.value));
  }
  return (
    <select className={Style.creado}  onChange={handleFiltro}>
      <option >filtro creado</option>
      <option value="creado"> creado</option>
      <option value="existente">existente</option>
    </select>
  );
};
export default BotonCreado;
