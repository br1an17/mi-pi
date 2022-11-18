import {
  GET_POKEMON,
  ERROR,
  POST_POKEMON,
  GETNAME_POKEMON,
  CURREN_PAGE,
  ORDEN_NAME,
  ORDEN_ATAQUE,
  ORDEN_TIPO,
  FILTRO_POR_TIPO,
  BUSCAR_DETALLE,
} from "../actions/actions";

const initialState = {
  pokemonReal: [],
  pokemon: [],
  pokemonFiltrados: [],
  error: {},
  post: {},
  pokeDetalle:[],
  //  pokecard:[],
  type: [],
  currentPage: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemon: [...action.payload],
        pokemonReal: action.payload,
      };
    case POST_POKEMON:
      return {
        ...state,
        post: action.payload,
      };
    case GETNAME_POKEMON:
      return {
        ...state,
        pokemon: [...action.payload],
      };
    case CURREN_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case ORDEN_NAME:
      const pokemonesName = [...state.pokemon];
      const filtroNombre =
        action.payload === "A-Z"
          ? pokemonesName.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : pokemonesName.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemon: filtroNombre,
        currentPage: 1,
        error: false,
      };
    case ORDEN_ATAQUE:
      // const ataquesFiltrados= state.pokemonFiltrados.length?state.pokemonFiltrados:state.pokemon
      const ataquePokemon = [...state.pokemon];
      const filtroAtaque =
        action.payload === "Min - Max"
          ? ataquePokemon.sort((a, b) => {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              }
              return 0;
            })
          : ataquePokemon.sort((a, b) => {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemon: filtroAtaque,
        // pokemonFiltrados:filtroAtaque,
        currentPage: 1,
        error: false,
      };
    case ORDEN_TIPO:
      return {
        ...state,
        type: action.payload,
      };

    case FILTRO_POR_TIPO:
      const tipoPokemon = [...state.pokemon];
      const filtroPokemon =
        action.payload === "tipo"
          ? state.pokemon
          : state.tipoPokemon.filter((e) => e.types.includes(action.payload));
      return {
        ...state,
        pokemonFiltrados: filtroPokemon,
        currentPage: 1,
        error: false,
      };
    case BUSCAR_DETALLE:
      return { ...state,
         pokeDetalle: action.payload,
        pokemon:[action.payload] };

    case ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return { ...state };
  }
}
