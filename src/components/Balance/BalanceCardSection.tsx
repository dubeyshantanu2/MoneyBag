import React, {FunctionComponent} from 'react';
import {styles} from './styles';
import BalanceCard from './BalanceCard';
import {BalanceCardProps} from './types';
import {View} from 'react-native';
const BalanceCardSection: FunctionComponent<BalanceCardProps> = props => {
  return (
    <View style={styles.balanceCard}>
      <BalanceCard {...props} />
    </View>
  );
};

export default BalanceCardSection;
