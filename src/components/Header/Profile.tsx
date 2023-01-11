import React, {FunctionComponent} from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleProp,
} from 'react-native';
import {styles} from './styles';

interface ProfileProps {
  img: ImageSourcePropType;
  imgStyles?: StyleProp<ImageStyle>;
  imgContainerStyles?: StyleProp<ImageStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: FunctionComponent<ProfileProps> = props => {
  return (
    <Pressable onPress={props.onPress} style={[props.imgContainerStyles, styles.profileContainer]}>
      <Image style={[styles.image, props.imgStyles]} source={props.img} />
    </Pressable>
  );
};

export default Profile;
