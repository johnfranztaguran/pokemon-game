import { StyleSheet } from 'react-native';
import { colors } from '../../constant/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.athensGray,
    marginBottom: 20
  },
  titleText: {
    color: colors.cinnabar,
    fontSize: 18
  },
  titleTextAb: {
    color: colors.cinnabar,
    fontSize: 18,
    marginTop: 10
  },
  labelText: {
    color: colors.green
  },
  pokeName: {
    color: colors.primaryBlue,
    fontSize: 20
  },
  pokemonImage: {
    margin: 10,
    height: 250,
    width: 250
  },
  content: {
    alignItems: 'center',
    marginTop: 19,
    paddingBottom: 0
  },
});

export default styles;
