/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {colors} from '../../utils/colors';
import RegularText from '../Text/RegularText';
import SmallText from '../Text/SmallText';
import {styles} from './styles';
import {TransactionProps} from './types';
import TransactionAvi from './TransactionAvi';
const TransactionItem: FunctionComponent<TransactionProps> = props => {
  return (
    <View style={styles.transactionRow}>
      <View style={styles.leftView}>
        <TransactionAvi background={props.art.background} />
        <View style={{marginLeft: 10}}>
          <RegularText style={{color: colors.secondary, textAlign: 'left', marginBottom: 5}}>
            {props.title}
          </RegularText>
          <SmallText style={{textAlign: 'left', color: colors.graydark}}>
            {props.subTitle}
          </SmallText>
        </View>
      </View>
      <View style={styles.rightView}>
        <RegularText style={{color: colors.secondary, textAlign: 'right', marginBottom: 5}}>
          {props.amount}
        </RegularText>
        <SmallText style={{textAlign: 'right', color: colors.graydark}}>{props.date}</SmallText>
      </View>
    </View>
  );
};

export default TransactionItem;
