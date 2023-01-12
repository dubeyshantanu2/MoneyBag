import {ImageSourcePropType} from 'react-native';
export interface CardProps {
  id: number;
  accountNo: string;
  balance: string;
  alias?: string;
  //   image: ImageSourcePropType;
  logo: ImageSourcePropType;
}

export interface CardSectionProps {
  data: Array<CardProps>;
}
