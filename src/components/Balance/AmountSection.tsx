import React, {FunctionComponent} from 'react';
import {styles} from './styles';
import RegularText from '../Text/RegularText';
import SmallText from '../Text/SmallText';
import {View} from 'react-native';
import {colors} from '../../utils/colors';

import {AmountProps} from './types';

const AmountSection: FunctionComponent<AmountProps> = props => {
  return (
    <View style={styles.container}>
      <SmallText style={{color: colors.secondary, marginBottom: 15}}>Total Balance</SmallText>
      <RegularText style={{color: colors.secondary, fontSize: 28}}>${props.balance}</RegularText>
    </View>
  );
};

export default AmountSection;
