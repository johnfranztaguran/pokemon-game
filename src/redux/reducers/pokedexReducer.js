import {
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_FAILED
} from '../actions/actionTypes';

const initialState = {
  pokemons: [],
  error: '',
  isFetching: false,
  nextUrl: ''
};

const pokedexReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
        nextUrl: action.url,
        isFetching: false
			};
		case GET_POKEMON_FAILED:
      return {
        ...state,
        error: action.error
			};
		case GET_POKEMON_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
};

export default pokedexReducer;
