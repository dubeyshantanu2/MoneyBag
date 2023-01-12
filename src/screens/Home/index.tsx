import React, {FunctionComponent} from 'react';
import {StatusBar, View} from 'react-native';
import {styles} from './styles';
import logo1 from '../../assets/cards/mc.png';
import logo2 from '../../assets/cards/visa_white.png';
import CardSection from '../../components/Cards/CardSection';
const Home: FunctionComponent = () => {
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
  return (
    <View style={styles.container} testID="home-screen">
      <StatusBar barStyle={'dark-content'} />
      <CardSection data={cardData} />
    </View>
  );
};

export default Home;
