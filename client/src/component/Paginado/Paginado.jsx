import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginaActual } from "../../redux/actions/actions";

export default function Paginado() {
  const dispatch = useDispatch();
  const pokemones = useSelector((state) => state.pokemon);
  const filtro = useSelector((state) => state.pokemonFiltrados);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = filtro.length
  ? Math.ceil(filtro.length / 12)
  :Math.ceil(pokemones.length / 12);
  const nPages = [...Array(maxPages)].map((value, index) => index + 1);
    const handleClick = (pagina)=>{
      setCurrentPage(pagina)
    }
  useEffect(() => {
    setCurrentPage(1);
  }, [pokemones]);


  useEffect(() => {
    dispatch(paginaActual(currentPage));
  }, [dispatch, currentPage]);

  return (
    <>
    <div>
      {nPages.map((number) => (
        <div key={number}>
          <button onClick={()=>handleClick(number)}>{number}</button>
        </div>
      ))}
    </div>
      </>
  );
}
