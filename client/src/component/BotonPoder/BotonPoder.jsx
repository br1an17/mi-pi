import React from "react";
import { useDispatch } from "react-redux";

import { ordenPorAtaque } from "../../redux/actions/actions";


export const BotonPoder = ({setMaxMin,Maxmin} ) =>{

const dispatch = useDispatch();


// const[Maxmin,setMaxMin]=useState(false) 



const MaxMin = (e)=>{
  
    setMaxMin(!Maxmin)
      if(e.target.value === "Max-Min" || e.target.value ==="Min-Max")
      e.preventDefault();
      dispatch(ordenPorAtaque(e.target.value))
      // console.log(MaxMin)
    }
    return(

<select onChange={MaxMin}>
        <option> Filtro poder </option>
        <option value="Max - Min">Max - Min</option>
        <option value="Min - Max">Min - Max</option>
      </select>
    )
}