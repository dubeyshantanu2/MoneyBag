import React, {FunctionComponent} from 'react';
import {Image, ImageBackground, Pressable, View} from 'react-native';
import {CardProps} from './types';
import {styles} from './styles';
import SmallText from '../Text/SmallText';
import RegularText from '../Text/RegularText';
import cardBackground from '../../assets/bgs/background_transparent.png';
import {colors} from '../../utils/colors';
const CardItem: FunctionComponent<CardProps> = props => {
  return (
    <ImageBackground source={cardBackground} style={styles.imageBackground}>
      <Pressable onPress={() => {}} style={styles.pressableCard}>
        <View style={styles.pressableView}>
          <View style={styles.cardRow}>
            <RegularText style={{color: colors.white}}>
              ******** {props.accountNo.slice(6, 10)}
            </RegularText>
          </View>
          <View style={styles.cardRow}>
            <View style={styles.smallTextContainer}>
              <SmallText style={styles.smallText}>Total Balance</SmallText>
              <RegularText style={styles.regularText}>{props.balance}</RegularText>
            </View>
            <Image style={styles.logo} source={props.logo} />
          </View>
        </View>
      </Pressable>
    </ImageBackground>
  );
};

export default CardItem;
