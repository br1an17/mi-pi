import React from "react";
import { useDispatch } from "react-redux";
import { ordenPorNombre } from "../../redux/actions/actions";
import Style from "./BotonNombre.module.css";
const BotonNombre = ({setOrder,order}) =>{

// const[order,setOrder]=useState(false)

const dispatch = useDispatch();

const handlerOrder = (e) =>{
    setOrder(!order)
    // if (e.target.value === "A-Z" || e.target.value === "Z-A")
     e.preventDefault();
     dispatch(ordenPorNombre(e.target.value))
  }
  return(




<select className={Style.nombre} 
onChange={handlerOrder}>
        <option>Filtro nombre </option>
        <option value="A-Z">A - Z</option>
        <option value="Z-A">Z - A</option>
      </select>)}

      export default BotonNombre;