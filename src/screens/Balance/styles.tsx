import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {pixelSizeHorizontal, pixelSizeVertical} from '../../utils/sizes';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.graylight,
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(25),
    paddingVertical: pixelSizeVertical(25),
    width: '100%',
  },
});
