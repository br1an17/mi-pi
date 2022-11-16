import { GET_POKEMON , ERROR, POST_POKEMON, GETNAME_POKEMON } from "../actions/actions";

const initialState ={
    pokemon: [],
    error:{},
    post:{},
     pokecard:[]
}

 export default function rootReducer(state=initialState, action){


    switch(action.type){
        case GET_POKEMON:
            return{
                ...state,
                pokemon:[...action.payload]
            }
            case POST_POKEMON:
                return{
                    ...state,
                    post:action.payload

                }
            case GETNAME_POKEMON:
                return{
                    ...state,
                   pokemon:[...action.payload],
                }
            case ERROR:
                return{
                ...state,
                error:action.payload

                }
            


        default:
            return { ...state}
    }
}



