import React from "react";
import Style from "./Pokemones.module.css";
import { Link } from "react-router-dom";
import pikachu from "../../img/Pokemon-gifs-13.gif";
import { useDispatch, useSelector } from "react-redux";
import { getPokemones } from "../../actions/actions";
import { useEffect } from "react";

const Pokemones = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemones());
  }, [dispatch]);
  const pokemon = useSelector((state) => state.pokemon);
  console.log(pokemon);
  return (
    <>
      {pokemon.length > 0 ? (
        pokemon.map(({ image, name, types }) => (
          <div key={name}>
            <img src={image} alt="pokemon" />
            <h3>{name}</h3>
            <h4>tipo: {types}</h4>
          </div>
        ))
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
