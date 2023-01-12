// transactionSectionBackground
import {StyleSheet} from 'react-native';
import {pixelSizeHorizontal, pixelSizeVertical} from '../../utils/sizes';

export const styles = StyleSheet.create({
  transactionSectionBackground: {
    width: '100%',
    paddingHorizontal: pixelSizeHorizontal(25),
    paddingTop: pixelSizeVertical(5),
    flex: 2,
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: pixelSizeVertical(25),
  },
  transactionList: {
    width: '100%',
  },
});
