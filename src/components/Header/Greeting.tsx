import React, {FunctionComponent} from 'react';
import {StatusBar, StyleProp, TextStyle, View} from 'react-native';
import {styles} from './styles';
import RegularText from '../Text/RegularText';
import SmallText from '../Text/SmallText';

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = props => {
  return (
    <View style={styles.container} testID="Greeting-screen">
      <StatusBar barStyle={'light-content'} />
      <RegularText style={[styles.mainText, props.mainTextStyles]}>{props.mainText}</RegularText>
      <SmallText style={[styles.subText, props.subTextStyles]}>{props.subText}</SmallText>
    </View>
  );
};

export default Greeting;
