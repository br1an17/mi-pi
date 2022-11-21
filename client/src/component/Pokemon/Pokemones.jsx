import React from "react";
import Style from "./Pokemones.module.css";
import { Link } from "react-router-dom";
import pikachu from "../../img/Pokemon-gifs-13.gif";
import { useDispatch, useSelector } from "react-redux";
import { getPokemones, ordenPorTipo } from "../../redux/actions/actions";
import { useEffect } from "react";

const Pokemones = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  const filtro = useSelector((state) => state.pokemonFiltrados);
  const currentPage = useSelector((state) => state.currentPage);

  const prueva = filtro.length
    ? filtro.slice(currentPage * 12 - 12, currentPage * 12)
    : pokemon.slice(currentPage * 12 - 12, currentPage * 12);

  // const pokePaginado = ()=>{
  //  return pokemon.slice((currentPage*12)-12,currentPage*12)
  // }

  useEffect(() => {
    dispatch(getPokemones());
    dispatch(ordenPorTipo());
  }, [dispatch]);

  return (
    <>
      {prueva.length > 0 ? (
        prueva.map(
          (
            { image, name, types, id } // aca iva pokepaginado x prueva
          ) => (
            <div key={name} className={Style.contain}>
              <img src={image} alt="pokemon" className={Style.img} />
              <h2 className={Style.texto}>{name}</h2>
              {id > 40 ? (
                <h3 className={Style.texto}>Tipo: {types[0].name}</h3>
              ) : (
                <h3 className={Style.texto}>Tipo: {types.toString()}</h3>
              )}

              <Link to={`/principal/${id}`}>
                <button className={Style.boton}>Detalle</button>
              </Link>
            </div>
          )
        )
      ) : (
        <div>
          <img className={Style.fondo} src={pikachu} alt="imagen rota" />
          <Link to="/">
            <div className={Style.boton}></div>
          </Link>
        </div>
      )}
    </>
  );
};
export default Pokemones;
