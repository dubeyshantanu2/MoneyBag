import React, {FunctionComponent} from 'react';
import {StatusBar, View} from 'react-native';
import {styles} from './styles';
import {RootStackParamList} from '../../navigation/RootStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AmountSection from '../../components/Balance/AmountSection';
import BalanceCardSection from '../../components/Balance/BalanceCardSection';
import ButtonSection from '../../components/Balance/ButtonSection';
type Props = NativeStackScreenProps<RootStackParamList, 'Balance'>;
const Balance: FunctionComponent<Props> = ({route}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <AmountSection balance={route?.params?.balance} />
      <BalanceCardSection {...route?.params} />
      <ButtonSection />
    </View>
  );
};

export default Balance;
