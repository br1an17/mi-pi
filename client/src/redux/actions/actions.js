import axios from "axios";

export const GET_POKEMON = "GET_POKEMON";
export const ERROR = "ERROR";
export const POST_POKEMON = "POST_POKEMON";
export const GETNAME_POKEMON =  "GETNAME_POKEMON"; 
export const CURREN_PAGE = "CURREN_PAGE";
export const ORDEN_NAME = "ORDEN_NAME";
export const ORDEN_ATAQUE ="ORDEN_ATAQUE"
export const ORDEN_TIPO ="ORDEN_TIPO"
export const FILTRO_POR_TIPO = "FILTRO_POR_TIPO"
export const BUSCAR_DETALLE ="BUSCAR_DETALLE"
 export const FILTRO_POR_CREACION = "FILTRO_POR_CREACION"
export const BORRAR_DETALLE = "BORRAR_DETALLE"

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
export const ordenPorTipo = () =>{

 return async function(dispatch){
   try {   
     const res = await axios.get ("http://localhost:3001/tipo")
    const types = res.data
    dispatch({
      type: ORDEN_TIPO,
   payload: types
    })
   } catch (error) {
     dispatch({
       type:ERROR,
       
        payload:error
     })

   }
 }
}
export const Detalles = (id) =>{
return async function (dispatch){
 try {
  const pokeId = await axios.get (`http://localhost:3001/pokemon/${id}`)
  return dispatch({
  type:BUSCAR_DETALLE,
  payload: pokeId.data[0]
  }) 
} catch (error) {
  console.log("NO HAY DETALLE",error)
 }
}}
export const paginaActual = (pagina)=>{
  return {
    type:CURREN_PAGE,
    payload:pagina
    
  }
  
}
export const ordenPorNombre = (payload) =>{
  return{
    type: ORDEN_NAME,
    payload,
  }
}
 export const ordenPorAtaque = (payload) =>{
  return{
    type: ORDEN_ATAQUE,
    payload,
  }
 }
 export const filtroPorTipo = (payload) =>{
 return{
 type: FILTRO_POR_TIPO,
 payload,
 }
 }
 export const filtroCreado = (value) =>{
 return{

type: FILTRO_POR_CREACION,
payload:value

 }

 }
 export const borrarDetalle = () =>{
 return {type: BORRAR_DETALLE}

 }