import React from "react"
import { Link } from "react-router-dom";
 import Style from "./notFound.module.css"


 const NotFound = () =>{
    return(

      
       <div className= {Style.img} >
        <Link to ="/principal" className={Style.botonPrincipal}>
        <h3 className={Style.text} >Principal</h3>
        </Link>

       </div>
    )



}
export default NotFound;