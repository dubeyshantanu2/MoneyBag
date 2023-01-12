import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {colors} from '../../utils/colors';
import RegularText from '../Text/RegularText';
import SmallText from '../Text/SmallText';

import {styles} from './styles';
// import RegularText from '../Text/RegularText';
// import SmallText from '../Text/SmallText';
import {TransactionSectionProps} from './Types';

const TransactionSection: FunctionComponent<TransactionSectionProps> = props => {
  return (
    <View style={styles.transactionSectionBackground}>
      <View style={styles.transactionRow}>
        <RegularText style={{fontSize: 19, color: colors.secondary}}>Transaction</RegularText>
        <SmallText style={{color: colors.secondary}}>Recent</SmallText>
      </View>
    </View>
  );
};

export default TransactionSection;
