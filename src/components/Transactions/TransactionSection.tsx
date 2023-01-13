import React, {FunctionComponent} from 'react';
import {FlatList, View} from 'react-native';
import {colors} from '../../utils/colors';
import RegularText from '../Text/RegularText';
import SmallText from '../Text/SmallText';
import TransactionItem from './TransactionItem';
import {styles} from './styles';
import {TransactionSectionProps} from './types';

const TransactionSection: FunctionComponent<TransactionSectionProps> = props => {
  return (
    <View style={styles.transactionSectionBackground}>
      <View style={styles.transactionRow}>
        <RegularText style={styles.text}>Transaction</RegularText>
        <SmallText style={{color: colors.secondary}}>Recent</SmallText>
      </View>
      <FlatList
        data={props.data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.transactionList}
        keyExtractor={({id}) => id.toString()}
        renderItem={({item}: any) => <TransactionItem {...item} />}
      />
    </View>
  );
};

export default TransactionSection;
