import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import RegularButton from '../Button/RegularButton';
import {styles} from './styles';

const ButtonSection: FunctionComponent = () => {
  return (
    <View style={styles.buttonContainer}>
      <RegularButton btnStyle={{width: '50%'}} onPress={() => {}}>
        Cancel
      </RegularButton>
    </View>
  );
};

export default ButtonSection;
