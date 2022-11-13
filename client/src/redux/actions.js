import axios from "axios";

export const GET_POKEMON = "GET_POKEMON";
export const ERROR = "ERROR";

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

