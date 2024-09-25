import {NavigationProp} from '@react-navigation/native';

export type NaviProps = {
  navigation: NavigationProp<any>;
};

export type ProductType = {
  id: number;
  category?: string;
  description?: string;
  image?: string;
  price?: number;
  rating?: {
    count?: number;
    rate?: number;
  };
  title?: string;
};
