import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginaActual } from "../../redux/actions/actions";
import Style from "./Paginado.moule.css"
import flechaI from "../../img/flecha 2 .png"
import flechaD from "../../img/right-arrow.png"

export default function Paginado({setRender,render}) {
  const dispatch = useDispatch();
  const pokemones = useSelector((state) => state.pokemon);
  const filtro = useSelector((state) => state.pokemonFiltrados);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = filtro.length
    ? Math.ceil(filtro.length / 12)
    : Math.ceil(pokemones.length / 12);
  const nPages = [...Array(maxPages)].map((value, index) => index + 1);
  const handleClick = (pagina) => {
    setCurrentPage(pagina);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [pokemones]);

  useEffect(() => {
    dispatch(paginaActual(currentPage));
  }, [dispatch, currentPage]);


  const handleNext = () =>{
    if(currentPage +1 <= nPages.length ){
      setCurrentPage (currentPage+1) 
   dispatch(paginaActual(currentPage));
    setRender(!render)
 } else {
  return null;
 }
  }
const handlePrev = () =>{
  if(currentPage -1 >= 1){
    setCurrentPage(currentPage-1)
   dispatch(paginaActual(currentPage))
   setRender(!render)
  }else{
    return null
  }
}

  return (

    <div className="container">
    <div>
            <button  onClick={handlePrev}>
            <img src={flechaD} height="20px" width="20px" alt="atras"/>
            </button>  
      </div>        
      <div className="botones" > 
        {nPages.map((number) => (
          <div  key={number}>
            <button  onClick={() => handleClick(number)}>{number}</button>
          </div>
        ))}
      </div>
      <div>

            <button  onClick={handleNext}>
             <img src={flechaI} height="20px" width="20px"  alt="flecha =>" />
            </button>  
      </div>
    </div>
  );
}
