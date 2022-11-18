import React, { useEffect } from "react";
import { filtroPorTipo, ordenPorTipo } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";


const BotonTipo = () =>{

const todosLosTipos = useSelector((state) => state.type);

const dispatch = useDispatch();
 
 useEffect(() => {
  dispatch(ordenPorTipo())
 }, [dispatch])
 

 function handleFiltro(e) {
  
  if(e.target.value === "tipo")
    e.preventDefault();
    dispatch(filtroPorTipo(e.target.value));
  
}
return (
<select onChange={handleFiltro}>
  <option value="tipos"> tipos </option>
  {todosLosTipos.map((e) => (
      <option value={e.name} key={e.name}>
        {e.name[0].toUpperCase()+e.name.slice(1)}
      </option>
    
  ))}
</select>)}
export default BotonTipo;
