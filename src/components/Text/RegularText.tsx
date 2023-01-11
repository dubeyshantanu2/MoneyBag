import React from 'react';
import {fontPixel} from '../../utils/sizes';
import {Text, StyleSheet, TextProps} from 'react-native';
import {colors} from '../../utils/colors';

type props = TextProps;

export default function RegularText(props: props) {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontPixel(15),
    color: colors.gray,
    textAlign: 'left',
    fontWeight: 'bold',
    // fontFamily: 'Lato-Regular',
  },
});
