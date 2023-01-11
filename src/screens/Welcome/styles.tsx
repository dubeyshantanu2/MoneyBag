import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../utils/sizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: 'space-between',
  },
  topsection: {
    width: SCREEN_WIDTH,
    flex: 1,
    maxHeight: SCREEN_HEIGHT * 0.55,
  },
  topImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  bottomSection: {
    width: SCREEN_WIDTH,
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(25),
    paddingVertical: pixelSizeVertical(25),
    justifyContent: 'flex-end',
  },
  heading: {
    width: '70%',
    marginBottom: 25,
  },
  subHeading: {
    width: '70%',
    marginBottom: 25,
  },
});
