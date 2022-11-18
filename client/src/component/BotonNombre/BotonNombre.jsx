import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ordenPorNombre } from "../../redux/actions/actions";

const BotonNombre = () =>{
const[order,setOrder]=useState(false)

const dispatch = useDispatch();

const handlerOrder = (e) =>{
    setOrder(!order)
    if (e.target.value === "A-Z" || e.target.value === "Z-A")
     e.preventDefault();
     dispatch(ordenPorNombre(e.target.value))
  }
  return(




<select onChange={handlerOrder}>
        <option>Filtro nombre </option>
        <option value="A-Z">A - Z</option>
        <option value="Z-A">Z - A</option>
      </select>)}

      export default BotonNombre;