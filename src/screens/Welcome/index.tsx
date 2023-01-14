import React, {FunctionComponent} from 'react';
import {StatusBar, View, Image} from 'react-native';
import {styles} from './styles';
import background from '../../assets/bgs/background_v1.png';
import SmallText from '../../components/Text/SmallText';
import BigText from '../../components/Text/BigText';
import RegularButton from '../../components/Button/RegularButton';
import {RootStackParamList} from '../../navigation/RootStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;
const TopSection = () => {
  return (
    <View style={styles.topsection}>
      <Image source={background} style={styles.topImage} />
    </View>
  );
};

const Welcome: FunctionComponent<Props> = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container} testID="welcome-screen">
        <TopSection />
        <View style={styles.bottomSection}>
          <BigText style={styles.heading}>Best way to track your money</BigText>
          <SmallText style={styles.subHeading}>
            Best payment method, connect money to your friends, family
          </SmallText>
          <RegularButton
            onPress={() => {
              navigation.navigate('Home');
            }}>
            Get Started
          </RegularButton>
        </View>
      </View>
    </>
  );
};

export default Welcome;
