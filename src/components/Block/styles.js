import { StyleSheet } from 'react-native';
import { colors } from '../../constant/colors';

const styles = StyleSheet.create({
  block: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  card: {
    borderRadius: 6
  },
  center: {
    alignItems: 'center'
  },
  middle: {
    justifyContent: 'center'
  },
  left: {
    justifyContent: 'flex-start'
  },
  right: {
    justifyContent: 'flex-end'
  },
  top: {
    justifyContent: 'flex-start'
  },
  bottom: {
    justifyContent: 'flex-end'
  },
  shadow: {
    shadowColor: colors.shadowBlack,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 13,
    elevation: 2
  },
  primary: { backgroundColor: colors.primaryBlue },
  white: { backgroundColor: colors.solidWhite },
  concrete: { backgroundColor: colors.concrete }
});

export default styles;
