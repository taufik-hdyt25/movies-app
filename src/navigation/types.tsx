// types.ts (continuation)
import {StackNavigationProp} from "@react-navigation/stack";

export type RootStackParamList = {
  HomeScreen: undefined;
  SnackbarsScreens: undefined;
};

type SnackbarsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SnackbarsScreens"
>;
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "HomeScreen"
>;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

export type SnackbarsScreenProps = {
  navigation: SnackbarsScreenNavigationProp;
};
