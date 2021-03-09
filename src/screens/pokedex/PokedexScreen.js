import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Config from 'react-native-config';
import PokedexForm from './PokedexForm';
import { fetchPokemons } from '../../redux/actions/pokedexAction';

const PokedexScreen = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons.pokemons);
  const nextUrl = useSelector(state => state.pokemons.nextUrl);
  const isFetching = useSelector(state => state.pokemons.isFetching);

  const onPressNextPokemons = () => {
    dispatch(fetchPokemons(nextUrl));
  };

  useEffect(() => {
  }, [pokemons]);

  return (
    <PokedexForm
      pokemons={pokemons}
      imgUrl={Config.IMAGE_URL}
      onPressNextPokemons={onPressNextPokemons}
      isFetching={isFetching}
    />
  )
};

export default PokedexScreen;
