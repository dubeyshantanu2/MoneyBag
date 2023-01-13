// transactionSectionBackground
import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {pixelSizeHorizontal, pixelSizeVertical, heightPixel, widthPixel} from '../../utils/sizes';

export const styles = StyleSheet.create({
  transactionSectionBackground: {
    width: '100%',
    paddingHorizontal: pixelSizeHorizontal(25),
    paddingTop: pixelSizeVertical(5),
    flex: 8,
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: pixelSizeVertical(25),
  },
  transactionList: {
    width: '100%',
    paddingBottom: pixelSizeVertical(25),
  },
  text: {
    fontSize: 19,
    color: colors.secondary,
  },
  leftView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: '100%',
    alignItems: 'center',
    flex: 2,
  },
  rightView: {
    flex: 1,
  },
  transactionAvi: {
    height: heightPixel(45),
    width: widthPixel(45),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
