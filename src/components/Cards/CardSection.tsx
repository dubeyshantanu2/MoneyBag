import React, {FunctionComponent} from 'react';
import {FlatList} from 'react-native';
import {styles} from './styles';
import CardItem from './CardItem';
import {CardSectionProps} from './types';

const CardSection: FunctionComponent<CardSectionProps> = props => {
  return (
    <FlatList
      data={props.data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatlist}
      keyExtractor={({id}: any) => id.toString()}
      renderItem={({item}: any) => <CardItem {...item} />}
    />
  );
};

export default CardSection;
