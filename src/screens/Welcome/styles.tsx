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
  bottomSection: {
    width: SCREEN_WIDTH,
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(25),
    paddingVertical: pixelSizeVertical(25),
  },
});
