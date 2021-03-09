import {
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_FAILED
} from './actionTypes';
import Config from 'react-native-config';
import axios from 'axios';

export const getInitialPokemons = () => {
	return (dispatch) => {
		dispatch({ type: GET_POKEMON_REQUEST });
		axios.get(Config.REQUEST_URL)
			.then(res => {
				res.data.results.forEach((item, index) => {
					axios.get(item.url)
						.then(data => {
							res.data.results[index].pokemondata = data;
							res.data.results[index]._id = data.data.id;
						});
				});
				dispatch({
					type: GET_POKEMON_SUCCESS,
					payload: res.data.results,
					url: res.data.next
				});
			})
			.catch(err => {
				dispatch({ type: GET_POKEMON_FAILED, error: err });
			});
	};
};

export const fetchPokemons = next => {
	return (dispatch) => {
		dispatch({ type: GET_POKEMON_REQUEST });
		axios.get(next)
			.then(res => {
				res.data.results.forEach((item, index) => {
					axios.get(item.url)
						.then(data => {
							res.data.results[index].pokemondata = data;
							res.data.results[index]._id = data.data.id;
						});
				});
				dispatch({
					type: GET_POKEMON_SUCCESS,
					payload: res.data.results,
					url: res.data.next
				});
			})
			.catch(err => {
				dispatch({ type: GET_POKEMON_FAILED, error: err });
			});
	}
}