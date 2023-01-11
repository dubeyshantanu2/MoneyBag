import {GestureResponderEvent, StyleProp, TextStyle, ViewStyle, Pressable} from 'react-native';
import React, {FunctionComponent} from 'react';
import {styles} from './styles';
import RegularText from '../Text/RegularText';

interface ButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  btnStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = props => {
  return (
    <Pressable onPress={props.onPress} style={[styles.buttonContainer, props.btnStyle]}>
      <RegularText style={props.textStyle}>{props.children}</RegularText>
    </Pressable>
  );
};

export default RegularButton;
