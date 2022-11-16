import axios from "axios";

export const GET_POKEMON = "GET_POKEMON";
export const ERROR = "ERROR";
export const POST_POKEMON = "POST_POKEMON";
export const GETNAME_POKEMON =  "GETNAME_POKEMON"; 


export const getPokemones = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/pokemon");
      const pokemon = response.data;
      return dispatch({
        type: GET_POKEMON,
        payload:pokemon,
      });
    } catch (error) {
     return  dispatch({
        type: ERROR,
        payload: error,
      });
    }
   
  };
}; 
export const postPokemones = (pokemon) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/pokemon",pokemon);
      const mensaje = response.data;
      return dispatch({
        type: POST_POKEMON,
        payload:mensaje,
      });
    } catch (error) {
      console.log(error.response.data)
     return  dispatch({
        type: ERROR,
        payload: error,
      });
    }
   
  };
};
export function getNamePokemones(name) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/pokemon?name=${name}`);
      return dispatch({
        type: GETNAME_POKEMON,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type:  ERROR,
        payload: error,
      });
    }
  };
}