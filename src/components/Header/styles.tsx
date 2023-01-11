import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {fontPixel, heightPixel, widthPixel} from '../../utils/sizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mainText: {
    color: colors.secondary,
    fontSize: fontPixel(22),
  },
  subText: {
    color: colors.graydark,
  },
  profileContainer: {
    flexDirection: 'column',
    height: heightPixel(45),
    weight: widthPixel(45),
    borderRadius: 15,
  },
  image: {
    resizeMode: 'cover',
    height: '100%',
    weight: '100%',
    borderRadius: 15,
  },
});
