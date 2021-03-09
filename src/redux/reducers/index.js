import { combineReducers } from 'redux';
import pokedexReducer from './pokedexReducer';

const reducers = combineReducers({
  pokemons: pokedexReducer,
});

export default reducers;
