import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import Style from "./Form.module.css";
import { postPokemones } from "../../actions/actions";

const Form = () => {
  const dispatch = useDispatch();
  // const mensaje = useSelector((state) => state.post);
  // const error = useSelector((state) => state.error);
  const initialState = { 
    name: "",
  tipo: [],
  vida: 0,
  ataque: 0,
  defensa: 0,
  velocidad: 0,
  peso: 0,
  altura: 0,}
  const [input, setInput] = useState(initialState);

  const [errors, setErrors] = useState([]);

  const handleSumbit = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      // axios.post("http://localhost:3001/pokemon",input)
      dispatch(postPokemones({
        name:input.name,
        hp:input.vida,
        defense:input.defensa, 
        speed:input.velocidad,
        attack:input.ataque, 
        height:input.altura, 
        weight: input.peso,
        types: input.tipo
      }));
      setInput(initialState);
    } else {
      alert("por favor llene los campos requeridos");
    }
  };
 

  const validateInput = (input) => {
    const errors = {};
    if (!input.name || input.name.length < 3) {
      errors.name = "Debe tener un nombre de mas de tres letras";
    }

    if (!input.vida || input.vida < 0 || input.vida > 150) {
      errors.vida = "Debe tener una vida entre 1 - 150";
    }

    if (!input.ataque || input.ataque < 0 || input.ataque > 150) {
      errors.ataque = "Debe tener un ataque entre 1 - 150";
    }

    if (!input.defensa || input.defensa < 0 || input.defensa > 150) {
      errors.defensa = "Debe tener una defensa entre 1 - 150";
    }

    if (!input.velocidad || input.velocidad < 0 || input.velocidad > 150) {
      errors.velocidad = "Debe tener una velocidad entre 1 - 150";
    }

    if (!input.altura || input.altura < 0 || input.altura > 20) {
      errors.altura = "Debe tener una altura entre 1 - 50";
    }
    if (!input.peso || input.peso < 0 || input.peso > 1000) {
      errors.peso = "Debe tener un peso entre 1 - 1000";
    }
    if (input.tipo.length === 0) {
      errors.tipo = "Debe tener por lo menos un tipo";
    }

    return errors;
  };

  useEffect(() => {
    setErrors(validateInput(input));
  }, [input]);

  const handleForm = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={Style.contain}>
      <h1> crear pokemon</h1>
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
          <p>{errors.name && errors.name}</p>
        </div>

        <div>
          <label htmlFor="tipo">Tipo: </label>
          <input
            type="text"
            name="tipo"
            value={input.tipo}
            onChange={handleForm}
          />
          <p>{errors.tipo && errors.tipo}</p>
        </div>

        <div>
          <label htmlFor="vida">Vida: </label>
          <input
            type="text"
            name="vida"
            value={input.vida}
            onChange={handleForm}
          />
          <p>{errors.vida && errors.vida}</p>
        </div>

        <div>
          <label htmlFor="ataque">Ataque: </label>
          <input
            type="text"
            name="ataque"
            value={input.ataque}
            onChange={handleForm}
          />
          <p>{errors.ataque && errors.ataque}</p>
        </div>

        <div>
          <label htmlFor="defensa">Defensa: </label>
          <input
            type="text"
            name="defensa"
            value={input.defensa}
            onChange={handleForm}
          />
          <p>{errors.defensa && errors.defensa}</p>
        </div>
        <div>
          <label htmlFor="altura">Altura: </label>
          <input
            type="text"
            name="altura"
            value={input.altura}
            onChange={handleForm}
          />
          <p>{errors.altura && errors.altura}</p>
        </div>
        <div>
          <label htmlFor="velocidad">Velocidad: </label>
          <input
            type="text"
            name="velocidad"
            value={input.velocidad}
            onChange={handleForm}
          />
          <p>{errors.velocidad && errors.velocidad}</p>
        </div>
        <div>
          <label htmlFor="peso">Peso: </label>
          <input
            type="text"
            name="peso"
            value={input.peso}
            onChange={handleForm}
          />
          <p>{errors.peso && errors.peso}</p>
        </div>
        <button type="submit"> Crear un pokemon </button>
      </form>
    </div>
  );
};

export default Form;
