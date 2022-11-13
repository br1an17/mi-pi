import { GET_POKEMON , ERROR } from "./actions";

const initialState ={
    pokemon: [],
    error:{}

}

 export default function rootReducer(state=initialState, action){


    switch(action.type){
        case GET_POKEMON:
            return{
                ...state,
                pokemon:action.payload
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



