import React from 'react';
import {fontPixel} from '../../utils/sizes';
import {Text, StyleSheet, TextProps} from 'react-native';
import {colors} from '../../utils/colors';
// import {TextProps} from './types';

type props = TextProps;

// const smallText: FunctionComponent = props => {
//   return <Text style={[styles.text, props.style]}>{props.children}</Text>;
// };
export default function SmallText(props: props) {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontPixel(12),
    color: colors.gray,
    textAlign: 'left',
    // fontFamily: 'Lato-Regular',
  },
});
