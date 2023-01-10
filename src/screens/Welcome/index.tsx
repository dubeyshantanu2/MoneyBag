import React, {FunctionComponent} from 'react';
import {StatusBar, View, Text} from 'react-native';
import {styles} from './styles';
const TopSection = () => {
  return (
    <View style={styles.topsection}>
      <Text>Welcome to the</Text>
      <Text>React Native</Text>
      <Text>Boilerplate</Text>
    </View>
  );
};

const BottomSection = () => {
  return (
    <View style={styles.bottomSection}>
      <Text>Welcome to the</Text>
      <Text>React Native</Text>
      <Text>Boilerplate</Text>
    </View>
  );
};
const Welcome: FunctionComponent = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <TopSection />
        <BottomSection />
      </View>
    </>
  );
};

export default Welcome;
