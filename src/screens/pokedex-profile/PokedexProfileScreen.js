import React from 'react';
import { useRoute } from '@react-navigation/native';
import Config from 'react-native-config';
import _get from 'lodash.get';
import PokedexProfileForm from './PokedexProfileForm';

const PokedexProfileScreen = () => {
  const route = useRoute();
  const pokedata = route.params.item;
  const stats = _get(pokedata, 'pokemondata.data.stats', []);
  const abilities = _get(pokedata, 'pokemondata.data.abilities', []);
  return (
    <PokedexProfileForm
      pokedata={pokedata}
      imgUrl={Config.IMAGE_URL}
      stats={stats}
      abilities={abilities}
    />
  );
};

export default PokedexProfileScreen;
