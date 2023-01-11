import React, {FunctionComponent} from 'react';
import {StatusBar, View} from 'react-native';

import {styles} from './styles';

const Home: FunctionComponent = () => {
  return (
    <View style={styles.container} testID="home-screen">
      <StatusBar barStyle={'dark-content'} />
    </View>
  );
};

export default Home;
