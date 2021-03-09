import React from 'react';
import { Text, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import Block from '../../components/Block';
import styles from './styles';

const PokedexProfileForm = ({ pokedata, imgUrl, abilities, stats }) => {
	const renderProfilePhoto = () => {
		return (
			<FastImage
        source={{ uri: `${imgUrl}/${pokedata._id}.png` }}
        style={styles.pokemonImage}
      />
    );
	}
	
  return (
		<Block flex={1} white>
			<Block style={styles.content}>
				{renderProfilePhoto()}
				<Text style={styles.pokeName}>{pokedata.name}</Text>
			</Block>
			<Block column margin={[10, 10]}>
				<Text style={styles.titleText}>Stats</Text>
				{stats.map(item => (
					<Block flex={false} row margin={[5, 5]}>
						<Text style={styles.labelText}>{item.stat.name.toUpperCase()}: </Text>
						<Text style={styles.valueText}>{item.base_stat}</Text>
					</Block>
				))}
				<Text style={styles.titleTextAb}>Abilities</Text>
				{abilities.map(item => (
					<Block flex={false} row margin={[5, 5]}>
						<Text style={styles.labelText}>{item.ability.name.toUpperCase()}: </Text>
						<Text style={styles.valueText}>{item.is_hidden ? 'Learned' : 'Locked'}</Text>
					</Block>
				))}
			</Block>
		</Block>
  );
};

export default PokedexProfileForm;
