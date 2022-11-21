import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { borrarDetalle, Detalles } from "../../redux/actions/actions";
import Styles from "./Card.module.css";

export default function Card() {
  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {
    dispatch(Detalles(id));

    return () => {
      dispatch(borrarDetalle());
    };
  }, [dispatch, id]);

  const pokeDetalle = useSelector((state) => state.pokeDetalle);

  return (
    <div className={Styles.fondo}>
      {Object.keys(pokeDetalle).length ? (
        <div className={Styles.contain}>
          <img src={pokeDetalle.image} className={Styles.img} />
          <h1 className={Styles.name}>
            {" "}
            Nombre: {pokeDetalle.name} | ID: {pokeDetalle.id}{" "}
          </h1>
          {id > 40 ? (
            <h1 className={Styles.name}>Tipo: {pokeDetalle.types[0].name} </h1>
          ) : (
            <h1 className={Styles.name}>Tipo: {pokeDetalle.types.join(", ")} </h1>
          )}
          <h1 className={Styles.name}>
            Vida: {pokeDetalle.hp} | Peso: {pokeDetalle.weight}{" "}
          </h1>
          <h1 className={Styles.name}>
            velocidad: {pokeDetalle.speed} | Altura: {pokeDetalle.height}{" "}
          </h1>

          <Link to="/principal">
            <button className={Styles.boton}> Todos los pokemones </button>
          </Link>
        </div>
      ) : (
        <h1>cargando</h1>
      )}
    </div>
  );
}
