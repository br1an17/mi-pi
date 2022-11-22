import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Style from "./Form.module.css";
import { ordenPorTipo, postPokemones } from "../../redux/actions/actions";

const validateInput = (input) => {
  const errors = {};
  if (!input.name || input.name.length < 3 || !isNaN(input.name)) {
    errors.name = "Debe tener un nombre de mas de tres letras";}
    if (!input.hp || input.hp < 0 || input.hp > 150 || isNaN(input.hp)) {
      errors.hp = "Debe tener una vida entre 1 - 150";
    }

    if (!input.attack || input.attack < 0 || input.attack > 150 || isNaN(input.attack)) {
      errors.attack = "Debe tener un ataque entre 1 - 150";
    }

    if (!input.defense || input.defense < 0 || input.defense > 150 || isNaN(input.defense)) {
      errors.defense = "Debe tener una defensa entre 1 - 150";
    }

    if (!input.speed || input.speed < 0 || input.speed > 150 || isNaN(input.speed)) {
      errors.speed = "Debe tener una velocidad entre 1 - 150";
    }

    if (!input.weight || input.weight < 0 || input.weight > 20 || isNaN(input.weight)) {
      errors.weight = "Debe tener una altura entre 1 - 50";
    }

    if (!input.height || input.height < 0 || input.height > 1000 || isNaN(input.height)) {
      errors.height = "Debe tener un peso entre 1 - 1000";
    }

    if (!input.types.length) {
      errors.types = "Debe tener por lo menos un tipo";
    }
    // if(input.name &&input.hp && input.attack&&input.defense&&input.speed&&input.weight&&input.height)

    return errors;
  }
;
const Form = () => {
  const dispatch = useDispatch();
  const pokeCreado = useSelector((state) => state.type);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(ordenPorTipo());
    setErrors(validateInput(input)); ///
  }, [dispatch]);

  const initialState = {
    name: "",
    types: [],
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    weight: "",
    height: "",
  };
  const [input, setInput] = useState(initialState);

  const handleSumbit = (event) => {
    event.preventDefault();
    alert("Pokemon creado");
    dispatch(
      postPokemones({
        name: input.name,
        hp: input.hp,
        defense: input.defense,
        speed: input.speed,
        attack: input.attack,
        height: input.height,
        weight: input.weight,
        types: input.types,
        cretedInDb: true,
      })
    );

    setInput(initialState);
  };

  useEffect(() => {
    setErrors(validateInput(input));
  }, [input]);

  const handleForm = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    validateInput(input);
    // console.log(input);
  };

  const [option, setOption] = useState([]);

  const optionchange = (e) => {
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
    setOption([...option, e.target.value]);
  };

  return (
    <div className={Style.fondo}>
      <div className={Style.contain}>
        <h1 className={Style.title}> Nuevo pokemon</h1>
        <form onSubmit={handleSumbit}>
          <div>
            <label htmlFor="nombre">Nombre: </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleForm}
              required
            />
            <p className={Style.p}>{errors.name && errors.name}</p>
          </div>

          <div>
            <label htmlFor="tipo">Tipo: </label>
            <select onChange={optionchange}>
              {pokeCreado.map((e) => (
                <option value={e.name} key={e.name}>
                 
                  {e.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="types"
              value={option}
              onChange={handleForm}
            />
            <p className={Style.p}>{errors.types && errors.types}</p>
          </div>

          <div>
            <label htmlFor="vida">Vida: </label>
            <input
              type="text"
              name="hp"
              value={input.hp}
              onChange={handleForm}
            />
            <p className={Style.p}>{errors.hp && errors.hp}</p>
          </div>

          <div>
            <label htmlFor="ataque">Ataque: </label>
            <input
              type="text"
              name="attack"
              value={input.attack}
              onChange={handleForm}
            />
            <p className={Style.p}>{errors.attack && errors.attack}</p>
          </div>

          <div>
            <label htmlFor="defensa">Defensa: </label>
            <input
              type="text"
              name="defense"
              value={input.defense}
              onChange={handleForm}
            />
            <p className={Style.p}>{errors.defense && errors.defense}</p>
          </div>
          <div>
            <label htmlFor="altura">Altura: </label>
            <input
              type="text"
              name="height"
              value={input.height}
              onChange={handleForm}
            />
            <p className={Style.p}>{errors.height && errors.height}</p>
          </div>
          <div>
            <label htmlFor="velocidad">Velocidad: </label>
            <input
              type="text"
              name="speed"
              value={input.speed}
              onChange={handleForm}
            />
            <p className={Style.p}>{errors.speed && errors.speed}</p>
          </div>
          <div>
            <label htmlFor="peso">Peso: </label>
            <input
              type="text"
              name="weight"
              value={input.weight}
              onChange={handleForm}
            />
            <p className={Style.p}>{errors.weight && errors.weight}</p>
          </div>
          <button className={Style.boton} type="submit">
            {" "}
            Crear un pokemon{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
