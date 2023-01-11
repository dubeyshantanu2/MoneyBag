import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {pixelSizeHorizontal, pixelSizeVertical} from '../../utils/sizes';

export const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(10),
    backgroundColor: colors.primary,
    alignItems: 'center',
    borderRadius: 20,
  },
});
