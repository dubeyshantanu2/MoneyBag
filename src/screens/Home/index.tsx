import React, {FunctionComponent} from 'react';
import {StatusBar, View} from 'react-native';
import {styles} from './styles';
import logo1 from '../../assets/cards/mc.png';
import logo2 from '../../assets/cards/visa_white.png';
import CardSection from '../../components/Cards/CardSection';
import TransactionSection from '../../components/Transactions/TransactionSection';
import {colors} from '../../utils/colors';
import {RootStackParamList} from '../../navigation/RootStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Home: FunctionComponent<Props> = () => {
  const cardData = [
    {
      id: 1,
      accountNo: '1234567890',
      balance: '1000',
      alias: 'My Account',
      logo: logo1,
    },
    {
      id: 2,
      accountNo: '1234567890',
      balance: '1000',
      alias: 'My Account',
      logo: logo2,
    },
    {
      id: 3,
      accountNo: '1234567890',
      balance: '1000',
      alias: 'My Account',
      logo: logo1,
    },
  ];

  const TransactionData = [
    {
      id: 1,
      title: 'debit',
      subTitle: 'Payment to John Doe',
      amount: '1000',
      date: '12/12/2020',
      art: {
        background: colors.tertiary,
      },
    },
    {
      id: 2,
      amount: '1000',
      date: '12/12/2020',
      title: 'debit',
      subTitle: 'Payment to John Doe',
      art: {
        background: colors.accent,
      },
    },
    {
      id: 3,
      amount: '1000',
      date: '12/12/2020',
      title: 'debit',
      subTitle: 'Payment to John Doe',
      art: {
        background: colors.primary,
      },
    },
  ];

  return (
    <View style={styles.container} testID="home-screen">
      <StatusBar barStyle={'dark-content'} />
      <CardSection data={cardData} />
      <TransactionSection data={TransactionData} />
    </View>
  );
};

export default Home;
