import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {TransactionAviProps} from './types';
import {styles} from './styles';

const TransactionAvi: FunctionComponent<TransactionAviProps> = props => {
  return <View style={[styles.transactionAvi, {backgroundColor: props.background}]} />;
};

export default TransactionAvi;
