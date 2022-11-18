import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginaActual } from "../../redux/actions/actions";

// import style from './Paginado.module.css';


// const mostrarData = (data) => {
//   return data.map((p) => {
//     return (
//       <Card
//         name={p.name}
//         image={p.image}
//         types={p.types}
//         key={p.id}
//         id={p.id}
//       />
//     );
//   });
// };




export default function Paginado() {
  const dispatch = useDispatch();
  const pokemones = useSelector((state) => state.pokemon);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = Math.ceil(pokemones.length / 12);
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
    {/* <div className={Style.contCards}>
       {pokemones.length?(mostrarData())}
    
    </div> */}

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
