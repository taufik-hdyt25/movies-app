import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailMovieScreen: {id?: string};
  SearchMovieScreen: undefined;
  ErrorScreen: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Movies: undefined;
  Favorite: undefined;
};

export type StackProps = NativeStackScreenProps<RootStackParamList>;

export type TabProps = BottomTabScreenProps<RootTabParamList>;
