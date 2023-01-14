import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {fontPixel, pixelSizeHorizontal, pixelSizeVertical} from '../../utils/sizes';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    paddingTop: pixelSizeVertical(5),
  },
  balanceCard: {
    width: '100%',
    alignItems: 'center',
    flex: 2,
  },
  imageBackground: {
    height: '55%',
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: colors.accent,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: pixelSizeHorizontal(25),
  },
  pressableCard: {
    height: '100%',
    borderRadius: 25,
  },
  pressableView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(30),
    paddingVertical: pixelSizeVertical(30),
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    resizeMode: 'contain',
    flex: 1,
    width: '100%',
    height: '80%',
  },
  flatlist: {
    paddingHorizontal: pixelSizeHorizontal(25),
    alignItems: 'center',
  },
  smallTextContainer: {
    flex: 3,
  },
  smallText: {
    color: colors.graylight,
    marginBottom: pixelSizeVertical(5),
  },
  regularText: {
    fontSize: fontPixel(19),
    color: colors.graylight,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
});
